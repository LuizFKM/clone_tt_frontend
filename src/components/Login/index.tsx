import { useState } from 'react'
import { useLoginUserMutation } from '../../services/api'
import { Form, FormContainer, RegisterLink } from "./styles"
import { useDispatch } from 'react-redux'
import { login } from '../../store/reducers/user'



const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginUser, { isLoading, isError }] = useLoginUserMutation()
    const dispatch = useDispatch()


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password }).unwrap();
            localStorage.setItem('acessToken', response.access)
            dispatch(login({ user: response.user, token: response.access }))
            alert('Login bem-sucedido!');
        } catch (error) {
            console.error('Erro no login:', error);
        }
    }



    return (
        <>
            <FormContainer>
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                    <label htmlFor="email">email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="off" />
                    <label htmlFor="current-password">senha</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="current-password" autoComplete="given-name" />
                    <button type="submit" disabled={isLoading}>Entrar</button>

                    {isLoading && <p>Verificando...</p>}
                    {isError && <p>Erro ao fazer login.</p>}
                </Form>
                <RegisterLink to={"/register"}>Não possui conta? <span>registre-se</span></RegisterLink>
            </FormContainer>
        </>
    )

}

export default LoginForm
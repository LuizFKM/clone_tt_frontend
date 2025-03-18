import { Form, FormContainer } from "../Login/styles"
import { LoginLink } from "./styles"
import { useState } from "react"
import { usePostUsersMutation } from "../../services/api"


const RegisterForm = () => {
    const [postUser, { isLoading, isError, isSuccess }] = usePostUsersMutation()
    const [formData, setFormData] = useState({ username: '', email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await postUser(formData).unwrap();
            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <>
            <FormContainer>
                <h2>Registre-se</h2>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Crie um nome de usuário</label>
                    <input type="text" name="username" onChange={handleChange} />
                    <label htmlFor="nome">Digite seu nome completo</label>
                    <input type="text" name="nome" />
                    <label htmlFor="email" >Digite seu email</label>
                    <input type="email" name="email" onChange={handleChange} />
                    <label htmlFor="password">Crie uma senha</label>
                    <input type="password" name="password" onChange={handleChange} />
                    <label htmlFor="repassword">Digite sua senha novamente</label>
                    <input type="password" name="repassword" />
                    <button type="submit" disabled={isLoading}>Registar</button>
                    {isLoading && <p>Cadastrando...</p>}
                    {isError && <p>Erro ao cadastrar usuário.</p>}
                    {isSuccess && <p>Usuário cadastrado com sucesso!</p>}
                </Form>
                <LoginLink to={"/login"}>Voltar ao <span>login</span></LoginLink>
            </FormContainer>
        </>
    )
}

export default RegisterForm
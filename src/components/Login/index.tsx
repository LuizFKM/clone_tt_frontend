import { Form, FormContainer, RegisterLink } from "./styles"
const LoginForm = () => (
    <>
        <FormContainer>
            <h2>Login</h2>
            <Form>
                <label htmlFor="email">email</label>
                <input type="text" name="email" />
                <label htmlFor="password">senha</label>
                <input type="password" name="password" />
                <button type="submit">Entrar</button>
            </Form>
            <RegisterLink to={"/register"}>Não possui conta? <span>registre-se</span></RegisterLink>
        </FormContainer>
    </>
)

export default LoginForm
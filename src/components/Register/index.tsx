import { Form, FormContainer } from "../Login/styles"
import { LoginLink } from "./styles"

const RegisterForm = () => (
    <FormContainer>
        <h2>Registre-se</h2>
        <Form>
            <label htmlFor="userName">Crie um nome de usuário</label>
            <input type="text" id="userName" />
            <label htmlFor="nome">Digite seu nome completo</label>
            <input type="text" id="nome" />
            <label htmlFor="email">Digite seu email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Crie uma senha</label>
            <input type="password" id="password" />
            <label htmlFor="repassword">Digite sua senha novamente</label>
            <input type="password" id="repassword" />
            <button type="submit">Registar</button>
        </Form>
        <LoginLink to={"/login"}>Voltar ao <span>login</span></LoginLink>
    </FormContainer>
)

export default RegisterForm
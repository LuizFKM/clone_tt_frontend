import FormPost from "../../components/FormPost";
import Posts from "../../components/Posts";
import { FeedContainer, HomeContainer } from "./styled";

const Home = () => {
    return (
        <HomeContainer>
            <FeedContainer>
                <FormPost author="Luiz Francisco" />
                <Posts author="Luiz" text="primeiro tweet de testes" data="10/10/10" />
                <Posts author="Luiz" text="teste de quebra de linhas e espaçamento das letras teste de quebra de linhas e espaçamento das letras teste de quebra de linhas e espaçamento das letras" data="10/10/10" />
            </FeedContainer>
        </HomeContainer>
    )
}

export default Home
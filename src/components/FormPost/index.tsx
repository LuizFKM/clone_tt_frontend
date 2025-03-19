import { PostContainer } from "./styles"


type Props = {
    author: string
}

const FormPost = ({ author }: Props) => (
    <>
        <PostContainer>
            <h4>{author}</h4>
            <textarea name="post" id="author-post" placeholder="O que está pensando?" />
            <button type="submit">Postar</button>
        </PostContainer>
    </>
)

export default FormPost
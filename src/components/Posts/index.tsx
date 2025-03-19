
import { PostContainer } from "../FormPost/styles"
import { DataPost, TextContainer } from "./styles"

type Props = {
    author: string
    data: string
    text: string
}

const Posts = ({ author, data, text }: Props) => (
    <PostContainer>
        <h4>{author}</h4>
        <TextContainer>
            <p>{text}</p>
        </TextContainer>
        <DataPost>{data}</DataPost>
    </PostContainer>
)

export default Posts
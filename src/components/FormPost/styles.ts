import styled from "styled-components";

export const PostContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    

    button {
        width: 30%;
        align-self: flex-end;
        margin-top: 16px;
        border-radius: 8px;
        border: none;
        padding: 8px;
        cursor: pointer;
        background-color:rgba(34, 34, 34, 0.56);
        color: #f9f9f9;
        font-weight: bold;
    }

    textarea{
        max-width: 100%;
        height: 100px;
        resize: none;
        border: 1.5px solid rgba(249, 249, 249, 0.57);
        border-radius: 6px;
        padding: 6px;
        color: #f9f9f9;
        background-color:rgba(34, 34, 34, 0.39);
        font-size: 16px
    }

    h4 {
        margin-bottom: 6px;
        color: #f9f9f9;
    }

`
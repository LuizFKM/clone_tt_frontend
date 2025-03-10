import { styled } from 'styled-components'


export const FormContainer = styled.div`
    font-family: Roboto, sans-serif;
    color: #f9f9f9;
    background-color: #222222;
    width: 60%;
    height: 60%;
    margin: 0 auto;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        font-size:3em;
        margin-bottom: 8px;
    }
`

export const Form = styled.form`
        display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    

    input {
        color:  #f9f9f9;
        font-weight: bold;
        background-color: transparent;
        border-radius: 4px;
        border: solid rgba(249, 249, 249, 0.23) 0.5px;
        margin-bottom: 24px;
        padding: 16px;
        width: 60%; 
        max-width: 100%
    }

    button {
        padding: 8px;
        margin-bottom: 8px;
        width: 60%;
        border-radius: 4px; 
        border: none;
        color: #222222;
        font-weight: bold;
        font-size: 1em;
        cursor: pointer;

    }
`
export const RegisterLink = styled.h4`
    margin-top: 16px;
    font-family: Roboto, sans-serif;
    span {
        color: #4285f4 ;
        cursor: pointer;
    }

`
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -55%);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;


export const FormContainer = styled.div`
    font-family: Roboto, sans-serif;
    color: #f9f9f9;
    background-color: #222222;
    width: 40%;
    height: 70%;
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
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);

    animation: ${fadeInUp} 0.6s ease-in-out;

    h2 {
        font-size:2em;
        margin-bottom: 8px;
        margin-top: 24px;
    }
`

export const Form = styled.form`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    label{

        align-self: flex-start; 
        margin-left: 20%;
    }

    input {
        color:  #f9f9f9;
        font-weight: bold;
        background-color: transparent;
        border-radius: 4px;
        border: solid rgba(249, 249, 249, 0.23) 0.5px;
        margin-bottom: 24px;
        margin-top: 8px;
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
export const RegisterLink = styled(Link)`
    margin-top: 16px;
    font-family: Roboto, sans-serif;
    color:  #f9f9f9;
    font-style: none;
    text-decoration: none; 
    span {
    color: #3e78ff;
    }

`
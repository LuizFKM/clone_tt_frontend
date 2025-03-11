
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


export const GlobaalCss = createGlobalStyle`
     *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
    body {
    background-color:rgb(59, 59, 59) ;

}
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`
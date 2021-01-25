import styled from 'styled-components';

export const CardsContainer = styled.section`
    display: flex;
    /*flex-direction: column;*/
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:100px;
    
`

export const Cards = styled.div`
    margin-top: 5%;
    display: flex;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
` 

export const CardViagem = styled.div`
    border: 1px solid black;
    width: 60%;
    margin-top: 5%;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
`


export const MainContainer = styled.section`
    grid-area: main;
    width: 80%;
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;  
`

export const MainFooterContainer = styled.footer`
    grid-area: footer;
`
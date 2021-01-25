import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    min-height: 80px;
    width: 100%;
    color: white;
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LoginWrapper = styled.p`
    letter-spacing: 0.4rem;
    font-weight: bold; 
    font-size: large;
    text-align: center;
    padding: 16%;
    cursor: pointer;
    :hover{
        border: 2px white solid;
        border-right: none;
        border-top: none;

    }
`


export const HeaderWrapper = styled.header`
    min-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    max-height: 70px;
    margin-left: 2%;
    padding: 2px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
`

export const LabexName = styled.h1`
    margin-right: 2%;
    color: white;
    letter-spacing: 0.7rem;
    font-weight: bold; 
    font-size: large;
    cursor: pointer;
`
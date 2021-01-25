import styled from 'styled-components';

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
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 1.2rem 'Ubuntu', sans-serif;
        background-image: url('https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/w_2560%2Cc_limit/pulsar-831502910.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
`

export const PageWrapper = styled.section`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-areas:'upper'
                        'main'
                        'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr 1fr;
`

export const HeaderWrapper = styled.section`
    grid-area: upper;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #202020;
    opacity: 85%;
`

export const ContentWrapper = styled.section`
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterWrapper = styled.section`
    grid-area: footer;
    height: 80px;
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #202020;
    opacity: 85%;
    align-items: center;
    justify-content: left;
`
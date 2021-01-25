import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import{
    PageWrapper,
    HeaderWrapper,
    ContentWrapper,
    FooterWrapper
} from '../../styles/global.styles';

import{
    UserButton,
    ButtonEnter,
    BoxContainer,
    TextContainer,
} from '../../styles/home.styles';

export const Home = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    const goToTripsPage = () => {
        history.push('/lista-de-viagens');
    };

    //const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const aoLogar = async () => {
        const body = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/login`, body);

            localStorage.setItem('token', response.data.token);
            history.push('/adm');
        } catch (e) {
            alert('Login e/ou senha incorretos.')
        }
    };

    return (
        <PageWrapper>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <ContentWrapper>
                <BoxContainer>
                    <TextContainer>GOING BEYOND</TextContainer>
                    <ButtonEnter onClick={goToTripsPage}>entrar</ButtonEnter>
                </BoxContainer>
            </ContentWrapper>
            <FooterWrapper>
                <Footer/>
            </FooterWrapper>
        </PageWrapper>
    );
};
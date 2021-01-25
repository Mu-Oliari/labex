import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
    FooterWrapper,
    LoginWrapper
} from './styles';

export const Footer = () => {

    const history = useHistory();

    const [token, setToken] = useState('');

    const aoLogar = async () => {
        const body = {
            email: 'email@email.com',
            password: 'password'
        };
        try {
            const response = await axios.post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/login`, body);
            localStorage.setItem('token', response.data.token);
            setToken(window.localStorage.getItem('token'));
            history.push('/admin');
            alert('logado com sucesso!')
        } catch (error) {
            alert('falha ao logar!')
            console.error(error);
        };
    };

    let login = ''
    const validaToken = window.localStorage.getItem('token');
    if(!validaToken){
        login = <LoginWrapper onClick={aoLogar}>login</LoginWrapper>
    } else {
        login = <p>bem-vindo(a) Sr(a). Admin</p>
    };

    return (
        <FooterWrapper>
            <p>Ad aeternum, de profundis ad astra...</p>
            <div>
                {login}
            </div>
        </FooterWrapper>
    );
};
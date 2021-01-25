import React from 'react';
import { useHistory } from 'react-router-dom';

import rocket from './Rocket-512.png';

import {
    HeaderWrapper,
    Logo,
    LabexName
} from './styles';

export const Header = () => {

    const history = useHistory();

    const validaToken = window.localStorage.getItem('token');
    const goToHome = () => {
        if(!validaToken){
            history.push('/');
        } else {
            history.push('/admin');
        };
    };


    return(
        <HeaderWrapper>
            <Logo onClick={goToHome} src={rocket}/>
            <LabexName onClick={goToHome}>LABEX</LabexName>
        </HeaderWrapper>
    );
};
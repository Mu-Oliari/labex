import React from 'react';
import { useHistory } from 'react-router-dom';

import { useProtectedPage } from '../../hooks/useProtectedPage';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { BsCardChecklist } from 'react-icons/bs';
import { VscNewFile } from 'react-icons/vsc';
import { RiLogoutCircleRLine } from 'react-icons/ri';

import{
    PageWrapper,
    HeaderWrapper,
    ContentWrapper,
    FooterWrapper
} from '../../styles/global.styles';

import { 
    DashboardContainer,
    SelectionContainer
} from '../../styles/admin.styles';

export const Admin = () => {

    useProtectedPage();

    const history = useHistory();

    const goToAdminTripsList = () => {
        history.push('/admin/lista-de-viagens');
    };

    const goToAdminCreateTrip = () => {
        history.push('/admin/criar-viagem');
    };

    const onLogout = () => {
        window.localStorage.clear();
        history.push('/');
    };

    return (
        <PageWrapper>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <ContentWrapper>
                <DashboardContainer>
                    <h1>Dashboard</h1>
                    <div>
                    <SelectionContainer onClick={goToAdminTripsList}>
                        <BsCardChecklist/>
                        Listar Viagens
                    </SelectionContainer>
                    <SelectionContainer onClick={goToAdminCreateTrip}>
                        <VscNewFile/>   
                        Cadastrar Viagem
                    </SelectionContainer>
                    <SelectionContainer onClick={onLogout}>
                        <RiLogoutCircleRLine/>
                        Sair
                    </SelectionContainer>

                    </div>
                </DashboardContainer>
            </ContentWrapper>
            <FooterWrapper>
                <Footer/>
            </FooterWrapper>
        </PageWrapper>
    );
};
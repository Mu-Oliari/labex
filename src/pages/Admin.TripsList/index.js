import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import{
    PageWrapper,
    HeaderWrapper,
    ContentWrapper,
    FooterWrapper
} from '../../styles/global.styles';

import { TripDetailsModal } from '../../components/TripDetailsModal'

import { useProtectedPage } from '../../hooks/useProtectedPage';

const TripsList = styled.div`
    display: flex;
    width: 75%;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 100px;
`

const TripItem = styled.div`
    min-width: 300px; 
    background-color: white;
    margin: 2%;
    padding: 2%;
    border-left: 4px black solid;
    border-bottom: 4px black solid;
    opacity: 90%;
`

export const AdminTripsList = (props) => {
    useProtectedPage();

    const [listaDeViagens, setListaDeViagens] = useState([]);

    const history = useHistory();

    useEffect(() =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', {
            headers: {
                aluno: 'murilo-oliari-julian'
            }
        }).then((response) => {
            console.log(response.data.trips)
            setListaDeViagens(response.data.trips)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <PageWrapper>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <ContentWrapper>
                <TripsList>
                    {listaDeViagens && listaDeViagens.map(viagem => {
                        return (
                            <TripItem>
                                <h3>{viagem.name}</h3>
                                <p>{viagem.planet}</p>
                                <TripDetailsModal 
                                    titulo={viagem.name}
                                    planeta={viagem.planet}
                                    dias={viagem.durationInDays}
                                    data={viagem.date}
                                    descricao={viagem.description}
                                    id={viagem.id}
                                />            
                            </TripItem>
                        )
                    })}
                </TripsList>
            </ContentWrapper>
            <FooterWrapper>
                <Footer/>
            </FooterWrapper>
        </PageWrapper>
    );
};
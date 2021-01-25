import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import{
    PageWrapper,
    HeaderWrapper,
    ContentWrapper,
    FooterWrapper
} from '../../styles/global.styles';

import {
    CardsContainer,
    Cards
} from '../../styles/tripsList.styles';


import { Header } from '../../components/Header';
import { PreviewCard } from '../../components/PreviewCard';
import { Footer } from '../../components/Footer';



export const TripsList = () => {
    const [listaDeViagens, setListaDeViagens] = useState([]);

    const history = useHistory();

    const goToTripDetail = (id) => {
        history.push(`/viagem/${id}`);
    };

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', {
            headers: {
                aluno: 'murilo-oliari-julian'
            }
        }).then((response) => {
            console.log(response.data.trips);
            setListaDeViagens(response.data.trips);
        }).catch((error) => {
            console.log(error);
        })
        
    }, []);
    
    return (
        <PageWrapper>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            
            <ContentWrapper>
                <CardsContainer>
                    <Cards>
                        <PreviewCard
                            imagem={`https://picsum.photos/200?random=99&blur=2`}
                            titulo="A próxima viagem está aqui"
                            descricao="Veja as viagens disponiveis e cadidate-se!"
                        />
                    </Cards>
                        {listaDeViagens && listaDeViagens.map((viagem, index) => {
                            return (
                                <Cards>
                                    <PreviewCard
                                        aoClicarViagem={() => goToTripDetail(viagem.id)}
                                        imagem={`https://picsum.photos/200?random=${index}&blur=2`}
                                        titulo={viagem.name}
                                        descricao={viagem.description}
                                    />
                                </Cards>
                            )
                        })}
                </CardsContainer>
            </ContentWrapper>
        
            <FooterWrapper>
                <Footer/>
            </FooterWrapper>
        </PageWrapper>
    );
};
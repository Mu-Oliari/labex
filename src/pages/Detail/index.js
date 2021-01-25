import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

import axios from 'axios';

import{
    PageWrapper,
    HeaderWrapper,
    ContentWrapper,
    FooterWrapper
} from '../../styles/global.styles';

import {
    TripContent,
    TripDescription,
    TripPhoto,
    FormAplicacao
} from '../../styles/detail.styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { useForm } from '../../hooks/useForm';
import { CountriesSelect } from '../../components/CountriesSelect';

export const Detail = () => {

    const history = useHistory();

    const pathParams = useParams();
    
    const { form, onChange } = useForm({name: '', age: '', applicationText: '', profession: '', country: ''});

    const [listaDeViagens, setListaDeViagens] = useState([]);
    //const [body, setBody] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const aoCandidatarse = () =>{
        //setBody(form)
        alert('Estamos sem algumas funcionalidades no momento');
        history.push('/lista-de-viagens');
    };

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', {
            headers: {
                aluno: 'murilo-oliari-julian'
            }
        }).then((response) => {
            setListaDeViagens(response.data.trips);
        }).catch((error) => {
            console.error(error);
        })
    }, []);

/**
useEffect(() => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips/${pathParams.id}/apply`, body, {
        headers: {
            aluno: 'murilo-oliari-julian',
            id: `${pathParams.id}`
        }
    }).then((response) => {
        alert('Cadastrado com sucesso!')
        history.push('/');
    }).catch((error) => {
        alert('Erro ao cadastar!')
        console.error(error);
    });
}, [body]);
 */

    const viagemDetalhada = listaDeViagens.filter(viagem => {
        if(viagem.id === pathParams.id) {
            return true;
        }
    });

    return (
        <PageWrapper>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <ContentWrapper>
                <TripContent>
                    <TripDescription>
                        {viagemDetalhada && viagemDetalhada.map(viagem => {
                            return (
                                <div key={viagem.id}>
                                    <h1>{viagem.name}</h1>
                                    <h6>planeta de destino: {viagem.planet}</h6>
                                    <h5>Embarque: {viagem.date} - duração da viagem: {viagem.durationInDays} dias</h5>
                                    <p>{viagem.description}</p>
                                </div>
                            );
                        })}
                    </TripDescription>
                    <TripPhoto src='https://picsum.photos/550/450?blur=4' />
                    <FormAplicacao>
                        <input
                            value={form.name}
                            type='text'
                            name='name'
                            placeholder='Nome'
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            value={form.age}
                            type='number' 
                            name='age'
                            placeholder='Idade'
                            min='18'
                            onChange={handleInputChange}
                            required
                        />
                        <textarea
                            value={form.applicationText}
                            type='text'
                            name='applicationText'
                            placeholder='Por qual motivo devo ser escolhido' 
                            rows='10'
                            cols='40' 
                            onChange={handleInputChange}
                            required
                        >
                        </textarea>
                        <input
                            value={form.profession}
                            type='text'
                            name='profession'
                            placeholder='Profissão'
                            onChange={handleInputChange} 
                            required
                        />
                        <CountriesSelect
                            countryValue={form.country}
                            onChange={handleInputChange}
                        />
                        <button onClick={aoCandidatarse}>Candidatar-se</button>
                    </FormAplicacao>
                </TripContent>
            </ContentWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </PageWrapper>
    );
};
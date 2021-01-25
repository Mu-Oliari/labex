import styled from 'styled-components';

export const TripContent = styled.section`
    margin-top: 2%;
    margin-bottom: 100px;
    display: grid;
    grid-template-areas:'description photo'
                        'form form';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    background-color: #fff;
    padding: 2%;
    opacity: 85%;
`
export const TripDescription = styled.div`
    display: flex;
    grid-area: description;
    justify-content: center;
    align-items: center;
`

export const TripPhoto = styled.img`
    grid-area: photo;
    border: 10;
    border-radius: 3;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, .5);
`

export const FormAplicacao = styled.form`
    display: flex;
    grid-area: form;
    width: 75%;
    flex-direction: column;
`
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Header from '../components/Header';

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const Error404 = styled.h3`
    font-family: 'Lora', serif;
    font-size: 30px;
    font-weight: 700;
`
const ButtonBackHome = styled.button`
    background: black;
    color: yellow;
    font-family: 'Lora', serif;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    margin-top: 30px;
    cursor: pointer;
`

const NotFound = () => {
    return (
        <>
            <Header />
            <ErrorContainer>
                <Error404>This page does not exist :(</Error404>
                <Link to='/'>
                    <ButtonBackHome type='button'>Back to Home</ButtonBackHome>
                </Link>
            </ErrorContainer>
        </>
    );
};

export default NotFound;
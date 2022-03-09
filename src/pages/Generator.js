import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Header from '../components/Header';

const GeneratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DefinitionContainer = styled.div`
    width: 50%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 20px;
    margin: 30px;
`

const Word = styled.h3`
    font-size: 32px;
    line-height: 41px;
    color: #134FE5;
`

const Definition = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    color: #000000;
`

const Button = styled.button`
    background: #134FE5;
    border-radius: 30px;
    color: #EFFF00;
    font-weight: bold;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 10px;
    margin-bottom: 30px;
`

const Generator = () => {

    const [definition, setDefinition] = useState(null)

    useEffect(() => {
        getDefinition()
    }, [])

    const getDefinition = () => {
        fetch(`https://api.urbandictionary.com/v0/random`)
        .then (response => response.json())
        .then (result => {
            console.log(result.list[0]);
            setDefinition(result.list[0]);
        })
    }

    const handleRandomClick = () => {
        const randomDefinition = Math.floor(Math.random() * 10 + 1)
        getDefinition()
    }

    console.log('definition', definition);

    if (!definition) {
        return <p>There is no definition !</p>
    }

    return (
        <>
            <Header />

            <GeneratorContainer>
                <DefinitionContainer>
                    <Word>{definition.word}</Word>
                    <Definition>{definition.definition}</Definition>
                    <p>Exemple : {definition.example}</p>
                </DefinitionContainer>
                
                <Button type='button' onClick={handleRandomClick}>Generate a definition</Button>
            </GeneratorContainer>
        </>
    );
};

export default Generator;
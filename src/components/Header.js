import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    padding: 20px 0px;
`

const Title = styled.h1`
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
`

const TitleBis = styled.h2`
    font-size: 24px;
    line-height: 31px;
    color: #EFFF00;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Random Definition Generator</Title>
            <TitleBis>from Urban Dictionary</TitleBis>
        </HeaderContainer>
    );
};

export default Header;
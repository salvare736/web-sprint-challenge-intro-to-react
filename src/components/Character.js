// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    padding: 1%;
    margin: 2%;
    border: 3px double black;
    backdrop-filter: blur(10px);
`

const CharacterName = styled.h1`
`

const CharacterBirthYear = styled.h2`
`

const Character = (props) => {
    const { characterName, characterBirthYear } = props

    return (
        <CharacterContainer>
            <CharacterName>
                {characterName}
            </CharacterName>
            <CharacterBirthYear>
                {characterBirthYear}
            </CharacterBirthYear>
        </CharacterContainer>
    );
};

export default Character;
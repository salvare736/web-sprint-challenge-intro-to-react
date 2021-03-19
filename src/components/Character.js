// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    padding: .5% 3%;
    margin: 2% 0%;
    border: 4px double ${pr => pr.theme.black};
    backdrop-filter: blur(10px);
`

const CharacterName = styled.h1`
    color: ${pr => pr.theme.black};
    font-size: x-large;
    font-family: 'Russo One', sans-serif;

    &:hover {
        color: ${pr => pr.theme.secondaryColor};
        font-size: xx-large;
        text-shadow:
        1px 1px 1px #dddddd,
        2px 2px 1px #f05454;
        transition: all 1.25s ease-in-out;
    }

    transition: all .75s ease-in-out;
`

const CharacterBirthYear = styled.h2`
    color: ${pr => pr.theme.black};
    font-size: x-large;
    font-family: 'Russo One', sans-serif;

    &:hover {
        color: ${pr => pr.theme.secondaryColor};
        font-size: xx-large;
        text-shadow:
        1px 1px 1px #dddddd,
        2px 2px 1px #f05454;
        transition: all 1.25s ease-in-out;
    }

    transition: all .75s ease-in-out;
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
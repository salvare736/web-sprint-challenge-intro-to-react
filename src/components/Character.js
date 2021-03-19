// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { characterName, characterBirthYear } = props

    return (
        <div>
            <h1>{characterName}</h1>
            <h2>{characterBirthYear}</h2>
        </div>
    );
};

export default Character;
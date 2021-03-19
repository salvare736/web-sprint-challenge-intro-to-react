// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { characterData } = props

    return (
        <div>
            <p>Character component is rendering!</p>
        </div>
    );
};

export default Character;
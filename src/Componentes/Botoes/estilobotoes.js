import styled from 'styled-components';

export const Botoes = styled.div`
    border: none;
    background-color: #FEF4DC;
    font-size: 24px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    outline: none;

    Botoes:hover {
        background-color: #F1E5C4;
    }

    Igualdade {
        grid-column: 3 / 5;
        background-color: #FFE4A3;
    }

    Igualdade:hover {
        background-color: #D8BE81;
    }
`;
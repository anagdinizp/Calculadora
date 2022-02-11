import React from 'react';
import { estilobotao } from './estilobotoes.js';

const botao = ({ classe, valor, onClick }) => {
    return (
        <estilobotao classe={classe} onClick={onClick}>{valor}</estilobotao>
    );
};

export default botao;
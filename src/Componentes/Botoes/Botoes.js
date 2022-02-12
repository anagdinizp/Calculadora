import React from 'react';
import { EstiloBotoes } from './style';
import Botao from '../Botao/Botao';

const Botoes = ({ onClick }) => {
    return (
        <EstiloBotoes>
            <Botao onClick={onClick}>C</Botao>
            <Botao onClick={onClick}>+-</Botao>
            <Botao onClick={onClick}>%</Botao>
            <Botao onClick={onClick}>/</Botao>
            <Botao onClick={onClick}>7</Botao>
            <Botao onClick={onClick}>8</Botao>
            <Botao onClick={onClick}>9</Botao>
            <Botao onClick={onClick}>x</Botao>
            <Botao onClick={onClick}>6</Botao>
            <Botao onClick={onClick}>5</Botao>
            <Botao onClick={onClick}>4</Botao>
            <Botao onClick={onClick}>-</Botao>
            <Botao onClick={onClick}>3</Botao>
            <Botao onClick={onClick}>2</Botao>
            <Botao onClick={onClick}>1</Botao>
            <Botao onClick={onClick}>+</Botao>
            <Botao onClick={onClick}>0</Botao>
            <Botao onClick={onClick}>.</Botao>
            <Botao onClick={onClick}>=</Botao>
            <Botao onClick={onClick}>=</Botao>
        </EstiloBotoes>
    );
};

export default Botoes;
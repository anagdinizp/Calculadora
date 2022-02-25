import React from 'react';
import { EstiloBotoes } from './style';
import Botao from '../Botao/Botao';

const Botoes = ({ setValor }) => {
    return (
        <EstiloBotoes>
            <Botao onClick={setValor("C")}>C</Botao>
            <Botao onClick={setValor}>+-</Botao>
            <Botao onClick={setValor}>%</Botao>
            <Botao onClick={setValor}>/</Botao>
            <Botao onClick={setValor}>7</Botao>
            <Botao onClick={setValor}>8</Botao>
            <Botao onClick={setValor}>9</Botao>
            <Botao onClick={setValor}>x</Botao>
            <Botao onClick={setValor}>6</Botao>
            <Botao onClick={setValor}>5</Botao>
            <Botao onClick={setValor}>4</Botao>
            <Botao onClick={setValor}>-</Botao>
            <Botao onClick={setValor}>3</Botao>
            <Botao onClick={setValor}>2</Botao>
            <Botao onClick={setValor}>1</Botao>
            <Botao onClick={setValor}>+</Botao>
            <Botao onClick={setValor}>0</Botao>
            <Botao onClick={setValor}>.</Botao>
            <Botao className="Igualdade" onClick={setValor}>=</Botao>
        </EstiloBotoes>
    );
};

export default Botoes;
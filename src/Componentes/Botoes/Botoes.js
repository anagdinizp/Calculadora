import React from 'react';
import { EstiloBotoes } from './style';
import Botao from '../Botao/Botao';

const Botoes = ({ digitos, setDigitos }) => {
    const resultado = () => {
        if (digitos.includes("+")){
            const [numero1, numero2] = digitos.split("+");
            return String(Number(numero1) + Number(numero2));
        }
        if (digitos.includes("-")){
            const [numero1, numero2] = digitos.split("-");
            return String(Number(numero1) - Number(numero2));
        }
        if (digitos.includes("x")){
            const [numero1, numero2] = digitos.split("x");
            return String(Number(numero1) * Number(numero2));
        }
        if (digitos.includes("/")){
            const [numero1, numero2] = digitos.split("/");
            return String(Number(numero1) / Number(numero2));
        }
    }

    const atualizarDigitos = (children) => {
        if (children === "C"){
            setDigitos("0")

        } else if (children === "+" || children === "-" || children === "/" || children === "x"){
            if (!(digitos.includes("+") || digitos.includes("-") || digitos.includes("/") || digitos.includes("x"))){
                setDigitos(digitos + children)
            }

        } else if (children === "="){
            setDigitos(resultado())

        } else if (children === "ᐊ"){
            setDigitos(digitos.slice(0, digitos.length - 1))    

        } else {
            if (digitos === "0") {
                setDigitos(children)
            }
            else {
                setDigitos(digitos + children)
            }
        }
    }
    return (
        <EstiloBotoes>
            <Botao atualizarDigitos={atualizarDigitos}>C</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>+-</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>%</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>ᐊ</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>7</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>8</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>9</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>x</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>6</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>5</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>4</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>-</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>3</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>2</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>1</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>+</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>0</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>.</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>/</Botao>
            <Botao className="Igualdade" atualizarDigitos={atualizarDigitos}>=</Botao>

        </EstiloBotoes>
    );
};

export default Botoes;
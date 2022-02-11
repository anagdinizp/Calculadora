import React from 'react';
import { estilocaixa } from './estilocaixa.js';

const caixa = ({ children }) => {
    return (
        <estilocaixa>{children}</estilocaixa>
    );
}

export default caixa;
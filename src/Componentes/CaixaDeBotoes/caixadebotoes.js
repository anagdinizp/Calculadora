import React from 'react';
import estilocaixadebotoes from './estilocaixadebotoes.js';

const caixadebotoes = ({ children }) => {
    return (
        <estilocaixadebotoes>{children}</estilocaixadebotoes>
    );
};

export default caixadebotoes;
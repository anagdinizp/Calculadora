import React from 'react';
import { EstiloVisor } from './style.js';

const Visor = ({ valor }) => {
    return (
        <EstiloVisor>{valor}</EstiloVisor>
    );
};

export default Visor;
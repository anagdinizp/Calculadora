import React from 'react';
import { EstiloVisor } from './style.js';

const Visor = ({ children }) => {
    return (
        <EstiloVisor>{children}</EstiloVisor>
    );
};

export default Visor;
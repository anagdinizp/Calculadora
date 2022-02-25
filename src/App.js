import React, { useState } from 'react';
import Caixa from './Componentes/Caixa/Caixa';
import Visor from './Componentes/Visor/Visor';
import Botoes from './Componentes/Botoes/Botoes';

const App = () => {
    const [Valor, setValor] = useState("")
    return (
        <Caixa>
            <Visor valor={Valor}/>
            <Botoes setValor={setValor}/>
        </Caixa>
    );
};

export default App;
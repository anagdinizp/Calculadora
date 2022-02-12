import Caixa from './Componentes/Caixa/Caixa';
import Visor from './Componentes/Visor/Visor';
import Botoes from './Componentes/Botoes/Botoes';

const App = () => {
    return (
        <Caixa>
            <Visor valor={"0"}/>
            <Botoes/>
        </Caixa>
    );
};

export default App;
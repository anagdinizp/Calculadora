import Caixa from './Componentes/Caixa/caixa.js';
import Visor from './Componentes/Visor/visor.js';
import CaixaDeBotoes from './Componentes/CaixaDeBotoes/caixadebotoes.js';
import Botoes from './Componentes/Botoes/botoes.js';

const App = () => {
    return (
        <Caixa>
            <Visor value="0" />
            <CaixaDeBotoes>
                <Botoes onClick={() => {}}
                />
            </CaixaDeBotoes>
        </Caixa>
    );
};

export default App;
import caixa from './Componentes/Caixa/caixa.js';
import visor from './Componentes/Visor/visor.js';
import caixadebotoes from './Componentes/CaixaDeBotoes/caixadebotoes.js';
import botao from './Componentes/Botao/botoes.js';

const App = () => {
    return (
        <caixa>
            <visor value="0" />
            <caixadebotoes>
                <botao onClick={() => {}}
                />
            </caixadebotoes>
        </caixa>
    );
};

export default App;
import Caixa from './Componentes/Caixa';
import Visor from './Componentes/Visor';
import CaixaDeBotoes from './Componentes/CaixaDeBotoes';
import Botoes from './Componentes/Botoes';

const App = () => {
    return (
        <Caixa>
            <Visor value="0" />
            <CaixaDeBotoes>
                <Botoes onClick={() => {
                    console.log("Clicado!");
                }}
                />
            </CaixaDeBotoes>
        </Caixa>
    );
};

export default App;
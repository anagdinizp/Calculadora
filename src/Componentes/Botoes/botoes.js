import Botoes from './estilobotoes.js';

const Botoes = ({ classe, valor, onClick }) => {
    return (
        <Botoes classe={classe} onClick={onClick}>{valor}</Botoes>
    );
};

export default Botoes;
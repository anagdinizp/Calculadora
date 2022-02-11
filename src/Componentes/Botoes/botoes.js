import botoes from './estilobotoes.js';

const Botoes = ({ classe, valor, onClick }) => {
    return (
        <botoes classe={classe} onClick={onClick}>{valor}</botoes>
    );
};

export default Botoes;
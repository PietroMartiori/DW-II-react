import styled from 'styled-components'

const Botao = styled.button`
 background-color:green;
 color:white;
 padding:10px;
 border-radius:5px;
 cursor:pointer;

 &:hover{
    background-color:darkviolet;
 }
 `;

function Meubotao() {
    return <Botao> Clique aqui </Botao>
}

export default Meubotao;
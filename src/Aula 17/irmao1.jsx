function Irmao1(props) {
    return (
        <div>
            <button onClick={() => props.enviarMensagem("Mensagem enviada pelo Irmão 1")}>
                Enviar mensagem para o Irmao 2
            </button>
        </div>
    );
}

export default Irmao1;
// hooks sao funcoes especiais do react;
// useState controla os estados de algo na interface
import { useState } from "react";
// import das imagens
import azul from "../../images/batom-azul.png";
import vermelho from "../../images/batom-vermelho.png";
import marrom from "../../images/batom-marrom.png";
import base from "../../images/batom-base.png";


function Lancamentos() {
    
    // cor a variavel inicial, setCor a funcao atualizadora
    const [cor, setCor] = useState(base)

    return(
        <section>
            <h2>APROVEITE OS LANCAMENTOS</h2>
            <img src={cor} alt="batom da cor base" />
            <button onClick={() => setCor(azul)}>Azul</button>
            <button onClick={() => setCor(vermelho)}>Vermelho</button>
        </section>
    )
}

export default Lancamentos
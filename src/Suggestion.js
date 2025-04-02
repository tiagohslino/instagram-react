import React from "react";

export default function Suggestion({imagem, nome, razao}) {
    
    return (
        <div class="sugestao">
                <div class="usuario">
                    <img src={imagem} alt={nome}/>
                    <div class="texto">
                        <div class="nome">{nome}</div>
                        <div class="razao">{razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    );
}
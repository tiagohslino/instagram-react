import React from "react";

export default function Story({imagem, nome}){
    return(
        <div class="story">
            <div class="imagem">
                <img src={imagem} alt={nome}/>
            </div>
            <div class="usuario">
                {nome}
            </div>
        </div>
    )
}
import React from "react";
import Suggestion from "./Suggestion";

export default function Suggestions() {

    const listaSugestoes = [
        {imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
        {imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
        {imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
        {imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
        {imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"},
        
    ];

    return (
        
        <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

            {listaSugestoes.map((item, index) => 
                <Suggestion nome={item.nome} 
                    imagem={item.imagem}
                    razao={item.razao}
                    key={index}
                />)
            }
                
        </div>
    );
}


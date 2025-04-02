import React from "react";

export default function User() {

    const imagemAvatar = "assets/img/catanacomics.svg";
    const [nome, setNome] = React.useState("catanacomics");
    const [avatar, setAvatar] = React.useState(imagemAvatar);

    function mudarNome(){
        const nomeDigitado = prompt("Digite seu nome de usuario");
        if (nomeDigitado) { 
            setNome(nomeDigitado);
        }
    }

    function mudarAvatar(){
        const linkDigitado = prompt("Digite o link da sua imagem");
        if (linkDigitado) { // Verifica se linkDigitado não é nulo ou string vazia
            setAvatar(linkDigitado);
        }
    }

    return(
        <div class="usuario">
            <img onClick={mudarAvatar} src={avatar} alt="imagem de perfil"/>
                <div class="texto">
                    <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={mudarNome} src="assets/icon/pencil.svg"></ion-icon>
                    </span>
                </div>
        </div>
    )
}
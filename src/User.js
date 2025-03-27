import React from "react";

export default function User() {

    const imagemAvatar = "assets/img/catanacomics.svg";
    const [nome, setNome] = React.useState("catanacomics");
    const [avatar, setAvatar] = React.useState(imagemAvatar);

    function mudarNome(){
        const nomeDigitado = prompt("Digite seu nome de usuario");
        setNome(nomeDigitado);
    }

    function mudarAvatar(){
        const linkDigitado = prompt("Digite o link da sua imagem");
        setAvatar(linkDigitado);
    }

    return(
        <div class="usuario">
            <img onClick={mudarAvatar} src={avatar} alt="imagem de perfil"/>
                <div class="texto">
                    <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={mudarNome} name="pencil"></ion-icon>
                    </span>
                </div>
        </div>
    )
}
import React from "react";

export default function Post({ nomeUsuario, imagemUsuario, imagemPost, altPost, nomeQuemCurtiu, imagemQuemCurtiu, curtidas }) {
    const [numeroCurtidas, setNumeroCurtidas] = React.useState(curtidas);
    const [favorito, setFavorito] = React.useState(false);
    const [like, setLike] = React.useState(false);

    function botaoFavorito() {
        setFavorito(!favorito);
    }

    function botaoLike() {
        if (!like) {
            setNumeroCurtidas(numeroCurtidas + 1);
        } else {
            setNumeroCurtidas(numeroCurtidas - 1);
        }
        setLike(!like);
    }

    function curtirImagem() {
        if (!like) {
            setNumeroCurtidas(numeroCurtidas + 1);
            setLike(true);
        }
    }

    const curtidasFormatadas = numeroCurtidas.toLocaleString('pt-BR');

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imagemUsuario} alt={nomeUsuario} />
                    {nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={curtirImagem} src={imagemPost} alt={altPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon
                            onClick={botaoLike}
                            src={like ? "assets/icon/heart.svg" : "assets/icon/heart-outline.svg"}
                            style={{ color: like ? 'red' : 'inherit' }}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            onClick={botaoFavorito}
                            src={favorito ? "assets/icon/bookmark.svg" : "assets/icon/bookmark-outline.svg"}
                        ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={imagemQuemCurtiu} alt={nomeQuemCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{nomeQuemCurtiu}</strong> e <strong>outras {curtidasFormatadas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
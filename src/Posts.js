import React from 'react';

export default function Posts() {

    const listaPost = [
        {   nomeUsuario: "meowed", 
            imagemUsuario: "assets/img/meowed.svg", 
            imagemPost: "assets/img/gato-telefone.svg",
            altPost: "gato-telefone",
            nomeQuemCurtiu: "respondeai",
            imagemQuemCurtiu: "assets/img/respondeai.svg",
            curtidas: 101523,
        },
        {   nomeUsuario: "barked", 
            imagemUsuario: "assets/img/barked.svg", 
            imagemPost: "assets/img/dog.svg",
            altPost: "dog",
            nomeQuemCurtiu: "adorable_animals",
            imagemQuemCurtiu: "assets/img/adorable_animals.svg",
            curtidas: 99159,
        },
        {   nomeUsuario: "9gag", 
            imagemUsuario: "assets/img/9gag.svg", 
            imagemPost: "assets/img/meowception.jpg",
            altPost: "cat",
            nomeQuemCurtiu: "barked",
            imagemQuemCurtiu: "assets/img/barked.svg",
            curtidas: 87654,
        },
        
    ];

    return (
        <div class="posts">
            {listaPost.map((item, index) =>
                <Post nomeUsuario={item.nomeUsuario} 
                    imagemUsuario={item.imagemUsuario} 
                    imagemPost={item.imagemPost} 
                    altPost={item.altPost} 
                    nomeQuemCurtiu={item.nomeQuemCurtiu} 
                    imagemQuemCurtiu={item.imagemQuemCurtiu}
                    curtidas={item.curtidas}
                    key={index}
                />)}
        </div>
    );
}

function Post({nomeUsuario, imagemUsuario, imagemPost, altPost, nomeQuemCurtiu, imagemQuemCurtiu, curtidas}) {

    const [numeroCurtidas, setNumeroCurtidas] = React.useState(curtidas);
    const [favorito, setFavorito] = React.useState(false);
    const [like, setLike] = React.useState(false);
    
    
    function botaoFavorito(){
        setFavorito(!favorito);
    }

    function botaoLike(){
        setLike(!like);
        if (!like) {
            setNumeroCurtidas(numeroCurtidas + 1);
            console.log("Curtidas incrementadas:", numeroCurtidas, like);
          } else {
            setNumeroCurtidas(numeroCurtidas - 1);
            console.log("Curtidas incrementadas:", numeroCurtidas, like);
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
                    <img onClick={botaoLike} src={imagemPost} alt={altPost}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            {/* O ícone bookmark estava dando erro que não consegui resolver, 
                            só renderizava o "-outline", por isso criei a pasta assets/icon e fiz manualmente, ok?*/}
                            <ion-icon onClick={botaoLike} src={like ? "assets/icon/heart.svg" : "assets/icon/heart-outline.svg"} style={{ color: like ? 'red' : 'inherit' }}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>

                            {/* Aqui o mesmo do anterior! Não sei porque os ícones só funcionaram assim*/}
                            <ion-icon onClick={botaoFavorito} src={favorito ? "assets/icon/bookmark.svg" : "assets/icon/bookmark-outline.svg"}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={imagemQuemCurtiu} alt={nomeQuemCurtiu}/>
                        <div class="texto">
                            
                        Curtido por <strong>{nomeQuemCurtiu}</strong> e <strong>outras {curtidasFormatadas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>             
    );
}
import React from 'react';
import Post from './Post';

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
                <Post
                    nomeUsuario={item.nomeUsuario}
                    imagemUsuario={item.imagemUsuario}
                    imagemPost={item.imagemPost}
                    altPost={item.altPost}
                    nomeQuemCurtiu={item.nomeQuemCurtiu}
                    imagemQuemCurtiu={item.imagemQuemCurtiu}
                    curtidas={item.curtidas}
                    key={index}
                />
            )}
        </div>
    );
}


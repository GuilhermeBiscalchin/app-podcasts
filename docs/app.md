# Podcast Manager

### Descrição

Um app estilo netflix, aonde possa centralizar diferentes episódio podcasts separados por categoria

### Domínio

Podcats feitos em vídeo

### Funcionalidades

- Listar os episódios podcasts em sessões de categorias
    - [saúde , fitness, mentalidade ,  humor, tecnologia, negocios]
- Filtrar episódios por nome de podcast

### Como

#### Funcionalidade:
- Listar os episódios podcasts em sessões de categorias

## Como vou implementar:

Vou retornar em uma api rest (json) o nome do Podcast, nome do episódio, imagem de capa, link, categoria

```js
[

    {
        podcastName: "flow",
        episode: "Fernando Yunes",
        videoId:"k3XinCZ0u5g",
        cover:"https://i.ytimg.com/vi/k3XinCZ0u5g/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=k3XinCZ0u5g",
        categoria: ['negocios']
    
    },
    {
        podcastName: "flow",
        episode: "Germano Couy",
        videoId: "kBi_0cp_P4g",
        cover:"https://i.ytimg.com/vi/kBi_0cp_P4g/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=kBi_0cp_P4g",
        categoria: ['tecnologia, negocios']
    
    }
]

```

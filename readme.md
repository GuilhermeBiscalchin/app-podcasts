
---

# 🎙️ Podcast Manager

## 📌 Descrição

O **Podcast Manager** é um aplicativo no estilo *Netflix de Podcasts*, focado em **podcasts em vídeo**, onde é possível centralizar, organizar e consumir episódios separados por **categorias**.

A ideia é facilitar a descoberta de conteúdos relevantes, permitindo listar episódios por tema e filtrar por nome do podcast.

---

## 🧠 Domínio

* Podcasts feitos em **vídeo**
* Conteúdos hospedados principalmente no **YouTube**

---

## 🚀 Funcionalidades

* 📂 Listar episódios de podcasts organizados por **categorias**
* 🔍 Filtrar episódios pelo **nome do podcast**
* 📺 Exibir informações do episódio:

  * Nome do podcast
  * Nome do episódio
  * Imagem de capa
  * Link do vídeo
  * Categoria(s)

### Categorias disponíveis

* Saúde
* Fitness
* Mentalidade
* Humor
* Tecnologia
* Negócios

---

## 🛠️ Como funciona a implementação

A aplicação expõe uma **API REST** que retorna os episódios no formato **JSON**.

Cada episódio contém as seguintes informações:

```json
[
  {
    "podcastName": "flow",
    "episode": "Fernando Yunes",
    "videoId": "k3XinCZ0u5g",
    "cover": "https://i.ytimg.com/vi/k3XinCZ0u5g/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=k3XinCZ0u5g",
    "categoria": ["negocios"]
  },
  {
    "podcastName": "flow",
    "episode": "Germano Couy",
    "videoId": "kBi_0cp_P4g",
    "cover": "https://i.ytimg.com/vi/kBi_0cp_P4g/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=kBi_0cp_P4g",
    "categoria": ["tecnologia", "negocios"]
  }
]
```

---

## 🌐 Rotas da API

| Método | Rota        | Descrição                            |
| ------ | ----------- | ------------------------------------ |
| GET    | `/list`     | Lista todos os episódios             |
| GET    | `/episodes` | Filtra episódios por nome do podcast |

---

## 🧩 Estrutura principal do servidor

O projeto utiliza o módulo nativo `http` do Node.js para criar o servidor e gerenciar as rotas.

```ts
import * as http from "http";

import {
  getFiltEpisodes,
  getLisEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/route";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  const [baseUrl] = request.url?.split("?") ?? ["", ""];

  // Listar podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getLisEpisodes(request, response);
  }

  // Filtrar podcast
  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
    await getFiltEpisodes(request, response);
  }
};
```

---

## 🧱 Tecnologias utilizadas

* **Node.js**
* **TypeScript**
* **HTTP nativo**
* Arquitetura baseada em **controllers e rotas**
* API REST

---

## 🧰 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

* **[Node.js](https://nodejs.org/)**
  Ambiente de execução JavaScript utilizado para rodar o servidor e a API.

* **[TypeScript](https://www.typescriptlang.org/)**
  Linguagem principal do projeto, trazendo tipagem estática, melhor organização e maior segurança no desenvolvimento.

* **[HTTP (Node.js)](https://nodejs.org/api/http.html)**
  Utilização do módulo nativo `http` para criação do servidor e gerenciamento das requisições, sem frameworks externos.

* **[TSX](https://github.com/esbuild-kit/tsx)**
  Ferramenta usada para executar arquivos TypeScript diretamente em ambiente de desenvolvimento, com suporte a hot reload.

* **[TSUP](https://tsup.egoist.dev/)**
  Bundler utilizado para gerar a versão de distribuição (`dist`) do projeto de forma rápida e otimizada.

* **[@types/node](https://www.npmjs.com/package/@types/node)**
  Tipagens oficiais do Node.js para suporte completo ao TypeScript.

* **[dotenv / Variáveis de Ambiente](https://www.npmjs.com/package/dotenv)**
  Utilizadas para configuração de ambiente, separando dados sensíveis e facilitando o setup entre desenvolvimento e produção.

---

### 📜 Scripts disponíveis

* `npm run start:dev`
  Inicia o servidor em modo desenvolvimento.

* `npm run start:watch`
  Inicia o servidor em modo watch, reiniciando automaticamente a cada alteração.

* `npm run dist`
  Gera a build de produção do projeto.

* `npm run start:dist`
  Executa a aplicação a partir dos arquivos compilados em `dist`.

---


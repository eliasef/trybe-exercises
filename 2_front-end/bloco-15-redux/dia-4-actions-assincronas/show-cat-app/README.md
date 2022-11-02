Esse é um projeto para o conteúdo sobre `redux-thunk`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch`

Verifique se a seguinte branch apareceu:

  `exercise-one`


- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Nesse exercício, utilizaremos a [API Random Cat](https://aws.random.cat/meow)[^1] para realizarmos nossas requisições. Vamos focar apenas no desenvolvimento de uma **action assíncrona** e na implementação do `thunk` na `store`. O `reducer`, 
assim como os componentes da aplicação, já estão prontos. Desse modo, realizaremos modificações apenas nos arquivos `actions/index.js` e 
`store/index.js`.

> 🚨 obs: Caso a API (https://aws.random.cat/meow) esteja fora do ar, você pode utilizar a [The Cat API](https://api.thecatapi.com/v1/images/search)[^2], porém, é importante observar que o retorno da requisição é diferente, por isso seu código deverá ser um pouco diferente.
Independentemente de qual API você usar, a requisição deverá ser feita da mesma maneira. A única diferença será que,  no arquivo `src/components/gallery.js`, a forma como a função `mapStateToProps` recebe a prop `imgPath` será diferente de acordo com a API utilizada.

 [^1]: https://aws.random.cat/meow o retorno é um objeto;
 [^2]: https://api.thecatapi.com/v1/images/search o retorno é um Array com 1 elemento.

Nessa aplicação, temos dois componentes: 
 1. `Gallery.js`, o qual renderiza uma imagem a partir de uma _URL_ armazenada no estado global da aplicação.
 2. `Button.js`, o qual renderiza um botão que, ao ser clicado, faz a requisição de uma imagem e armazena a URL no estado global por 
 meio de uma `action` assíncrona.

Como a aplicação está quase pronta, já temos o `reducer` e os componentes concluídos, nos falta somente a implementação do `thunk` e da action assíncrona. Para isso:
 1. Caso ainda não tenha feito, execute o comando `npm install` para instalar as dependecias
 necessárias para a aplicação: `redux`, `react-redux`, `redux-thunk`.
 2. Faça as implementações necessárias na **store**. (arquivo `store/index.js`)
 3. No arquivo `actions/index.js`, desenvolva a action assíncrona necessária para a
 aplicação rodar adequadamente. Essa _action_ assíncrona deverá fazer o uso de outras duas actions:
    1. Da `requestAPI`: para informar ao usuário que a informação solicitada está carregando
    2. Da `getPicture`: para salvar no estado global da aplicação a _URL_ da imagem solicitada da API.
 
_Observação: Para essa aplicação, é necessário que o nome da action assíncrona seja
 **fetchAPI**._


---


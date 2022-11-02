## p/ dúvidas: docker --help

- [1] Crie um container a partir de uma imagem ubuntu em modo interativo, desatachado e com uma seção de terminal

`docker run -itd ubuntu` 

<em>destachar: é o -d, crio o container porém n entro nele</em>

- [2] Verifique se o container está rodando

`docker ps -a`    

<em>all, poderia ser docker container ls -a</em>

- [3] Pare o container 

<em>supondo q o id do container começe com 10f...</em>

`docker stop 10f`

- [4] Confira de o container está parado

`docker ps -a`

- [5] Inicialize o container parado

`docker start 10f`

- [6] Acesse o container

`docker attach 10f`

- [7] Cheque quais diretórios existem na raiz

`ls`

- [8] Entre no diretório home, crie um arquivo notes.txt com o conteúdo "Ola mundo"

`cd /home`
`touch notes.txt`
`echo "Ola mundo" > notes.txt`
`cat notes.txt`

- [9] Saia do terminal do container e volte para o host (saia da Matrix!)

`exit`

- [10] Remova o container criado

`docker rm 10`

- [11] Elimine todos os containers parados 

`docker container prune`

- [12] Liste todas as imagens (EXTRA)

`docker images`

- [13] Remova a imagem do ubuntu (EXTRA)

<em>ver o image id com o docker images, supondo ser 216..</em>

`docker rmi 216`


// observações:
o exec executa um comando do container, a diferença entre ele e o run é que ele executa um comando, ex: 
docker exec -it meu-container sh
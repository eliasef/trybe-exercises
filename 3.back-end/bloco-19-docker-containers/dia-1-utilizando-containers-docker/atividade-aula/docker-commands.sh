#  1. Listar containers
docker -v

#  2. Ver comandos disponíveis
docker --help

#  3. Listar containers no Docker (na Matrix)
docker ps [-a | --all]
docker container ps [-a | --all]
docker container ls [-a | --all]
docker container list [-a | --all]

#  4. Criar um container (Jogar indivíduo na Matrix!)
docker run hello-world

#  5. Executar comando sugerido
docker run -it ubuntu bash
  cat /etc/*-release
  apt-get update && apt-get upgrade
  exit

# 6. Criando um container sem executar
docker create -it ubuntu bash
  docker start c9333570969e

# 7. Entrando em um container já em execução 
docker container attach c9333

# 8. Criando contêiner em segundo plano
docker container run -tid ubuntu

# 9. Parando um contêiner
docker stop 2c3

# 10. Iniciando um contêiner parado
docker start 2c3

# 11. Reiniciar contêiner 
docker restart 2c3

# 12. Pausar um contêiner
docker pause 2c3

# 13. "Despausar" um contêiner
docker unpause 2c3

# 14. Remover contêiner 
docker rm 2c3

# 15. Remove contêiner parados
docker container prune
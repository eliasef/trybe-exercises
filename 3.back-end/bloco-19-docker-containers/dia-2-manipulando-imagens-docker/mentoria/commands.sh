
# transformar Dockerfile em image
docker build -t <nome_image> .

# criar container a partir da imagem gerada
docker run -dit -p 3001:3030 <nome_image>

# caso queira sobrescrever o cmd da imagem 
docker run -dit -p 3001:3030 <nome_image> npm run dev

# stage 1
FROM node:alpine as build

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build 

#Fim stg 1
# stage 2 - + leve q o node - v8 navegador clean (nginx)

FROM nginx:stable-alpine

# copiar arquivos da build do meu pc pra publisher do nginx
COPY --from=build /app/build /usr/share/nginx/html 
## substituindo os arquivos (react browser router)
## COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# definir porta para rodar
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

############ FIM SCRIPT

# no bash:

# docker build -t xablau .
# docker images
# docker run -d -p 3000:80 --name meu-container xablau
# docker ps -a

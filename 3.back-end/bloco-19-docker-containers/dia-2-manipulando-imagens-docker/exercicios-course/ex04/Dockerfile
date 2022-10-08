FROM nginx

WORKDIR /usr/share/nginx/html

COPY ./index.html .

RUN ls 

EXPOSE 3000

ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD ["-g","daemon off;"]
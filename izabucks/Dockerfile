# # Define a imagem base do nginx
# FROM nginx

# #Como a api irá consultar requisições http
# #Copia os arquivos de codigo fonte para o diretorio de trabalho do ngnix
# COPY . /usr/share/nginx/angular
FROM nginx 
COPY nginx.conf /etc/nginx/nginx.conf 
COPY ./pucrio-mvp-sprint1-izabucks-frontend/izabucks/src/html /usr/share/nginx/html 


EXPOSE 80

# Define o comando de execução do servidor nginx
CMD ["nginx", "-g", "daemon off;"]
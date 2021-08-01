# IMAGEM
FROM node  
# DIRETORIO A SER CRIADO PARA ARMAZENAR INFOS
WORKDIR  /usr/app
# COPIA package.json PARA O DIRETORIO CRIADO
COPY package.json ./ 

RUN npm install

COPY . . 

EXPOSE 3333

CMD ["npm", "run", "dev"]
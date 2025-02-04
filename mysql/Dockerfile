FROM mysql:5.7

# Copia o script de inicialização para dentro do container
COPY init.sql /docker-entrypoint-initdb.d/

# Expõe a porta padrão do MySQL
EXPOSE 3306


eslint
sucrase
nodemon
npm - node
express - server
.env
sequelize
sequelize cli
mariadb
mysql workbench
bcrypt js
JWT
multer - image upload

## Notes

ele nao vai passar o id por parametro, ele vai gerar um token e com base nisso ele vai rodar as propriedades que esse usuário tem.

O middleware vai passar o userId e o userEmail por meio do token que vai ser validado e com isso voce consegue acessar ele com

req.userId
req.userEmail

### Multer

é um middleware que vai pegar as imagens que passar em um store ou create request. Ao qual o mesmo vai ser um MultipartForm - que vai trabalhar com a imagem que vc mandar. Voce deve definir o caminho e o nome do arquivo. Configurando voce chama a rota e coloca o nome do arquivo que vc deu no filename. 

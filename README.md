## Gerenciador de compras em React js
Uma aplicativo simulando um e-commerce

### Funcionalidades
- cadastro de usuário
- edição de usuário
- lista de produtos
- lista de produtos em ofertas
- adicionar no carrinho
- remover itens do carrinho
- ver carrinho
- total do pedido

### Salvamento dos dados
Os dados da conta do usuário e do carrinho de compras, estão sendo salvos no localStorage da aplicação.

### Requisição a uma Rest API
Para a aplicação, decidi criar um servidor em node, só para trazer a lista de produtos do aplicativo.
Link da api backend: https://backend-example-hiring-coders.herokuapp.com/api/v1/products

##### endpoints
- GET: https://backend-example-hiring-coders.herokuapp.com/api/v1/products/
- {find all products}
- GET: https://backend-example-hiring-coders.herokuapp.com/api/v1/products/offers
- {find all offers products}
- GET: https://backend-example-hiring-coders.herokuapp.com/api/v1/products/:id
- {find products by id}

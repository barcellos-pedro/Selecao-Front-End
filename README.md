# Selecao-Front-End

Você deverá forkar este repositório para fazer o seu exercício. Para entregar envie o link do seu repositório por e-mail.

O exercício deve ser desenvolvido necessariamente utilizando Node 8, Angular 2 ou posterior e Angular CLI 6.0.8 ou compatível. O objetivo é consumir e enviar dados a uma API em três situações:
- Listar registros
- Cadastrar um novo registro
- Deletar um registro
A tela inicial do exercício deve ser a listagem de registros.

## Listar registros

Quatro registros estão disponíveis na API, cada registro possui quatro propriedades: id, name, price e sku. Os registros devem ser listados em uma tabela com quatro colunas (uma para cada propriedade) e quatro linhas (uma para cada registro).

Deve ser feito um GET para a seguinte URL para se obter os registros: http://angular-test.blabs.us. A API retorna um JSON com os dados e o status code 200.

A coluna price deve ter a indicação de moeda (R$), o divisor de milhar deve ser o ponto e vírgula como divisor decimal.

## Cadastrar novo registro

Um botão de cadastrar novo registro deve ser exibido em cima da listagem de registros. Esse botão deve levar o usuário a um formulário com três campos: Name, Price e SKU. Os três campos são obrigatórios sendo que Name é uma string e Price é um valor numérico.

Deve ser feito um POST para a seguinte URL com os três dados: http://angular-test.blabs.us. Os dados são esperados dentro da requisição POST com os seguintes nomes: name, price e sku:
````
[
    'name' => 'Nome do produto',
    'price' => 123.45,
    'sku' => 'SKU do produto'
]
````

Em caso de sucesso o status code retornado é o 201 e os dados enviados são retornados em forma de JSON. Caso de erro o status code retornado é o 422.

Espera-se que o formulário tenha validações antes de disparar o request e verificação do status code retornado para garantir que o registro tenha sido de fato salvo com sucesso. Em caso de sucesso o usuário deve ser direcionado para os registros com um aviso de sucesso. Em caso de erro o usuário deve ser mantido na página do formulário com um aviso de erro.

Por se tratar de uma API de teste os dados não são de fato persistidos. Mesmo com o código de sucesso os dados enviados serão descartados, dessa forma para garantir o sucesso da operação é necessário basear-se apenas no status code retornado.

## Deletar um registro

Na tela de listagem de registros deve ser possível selecionar um registro e deletá-lo. 

Deve ser feito um DELETE para a URL http://angular-test.blabs.us. Apenas o ID do registro deve ser mandado através de um atributo GET, por exemplo: http://angular-test.blabs.us?id=1.

Em caso de sucesso a API retornará o status code 204 e espera-se que uma mensagem de sucesso seja exibida para o usuário. Em caso de erro uma mensagem também é esperada.

Por se tratar de uma API de teste os dados não são de fato deletados. Mesmo com o código de sucesso o registro é mantido, dessa forma para garantir o sucesso da operação é necessário basear-se apenas no status code retornado.

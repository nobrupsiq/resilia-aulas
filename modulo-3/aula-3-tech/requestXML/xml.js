var xml = new XMLHttpRequest();
console.log(xml);

// requisição XMLHttpRequest
// ReadyState
// 0 - Unsent requisição nao iniciada
// 1 - Opened
// 2 - Headers_Received
// 3 - Loading
// 4 - Done

xml.onreadystatechange = function () {
  if (xml.readyState === 4) {
    console.log(xml);
    document = xml.response;
  }
};

// 1 - Criamos um pasta entre na pasta pelo prompt
// 2 - No prompt de comando do node instalamos:
// 	npm init
// 	npm install express
// 	npm install node-fetch@2
// 	npm install -g nodemon
// 3 - Executamos no node com:
// 	nodemon app.js
// 	porta 8080 - localhoast:8080
// 4 - como criar uma pasta no prompt - mkdir "nome da pasta"

// 	Requisição XMLhttpRequest
// 	ReadyState
// 	0 - Requisição não iniciada
// 	1 - Estabelecendo uma requisição com o servidor
// 	2 - Pedido recebido
// 	3 - processando o pedido
// 	4 - Solicitação concluída e resposta pronta

// sites usados:
// https://expressjs.com/pt-br/starter/installing.html
// https://www.npmjs.com/package/nodemon
// api fake
// https://jsonplaceholder.typicode.com/

xml.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xml.send();

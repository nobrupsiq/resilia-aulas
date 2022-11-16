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

xml.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xml.send();

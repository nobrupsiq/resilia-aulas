function pai() {
  var x = 1;
  function filho() {
    console.log(x);
    x++;
  }
  return filho;
}
var contador = pai()
contador()
contador()
contador()

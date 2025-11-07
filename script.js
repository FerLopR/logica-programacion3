const numEntrada = parseInt(prompt("Agrega un número, por favor"));
let numFactorial = 1;
if(numEntrada < 0){
    console.log("No es posible")
}else{
for(let i = 1; i <= numEntrada; i++){
   numFactorial *=i;
 }
 document.body.innerHTML = `<h2>El factorial de ${numEntrada} es ${numFactorial}</h2>`;
 console.log(`El factorial de ${numEntrada} es ${numFactorial}`);
}
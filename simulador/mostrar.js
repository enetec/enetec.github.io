//obtém as variáveis
var email= window.localStorage.getItem('email')
var nome = window.localStorage.getItem('nome')
var Estado = window.localStorage.getItem('Estado')
var consumo= window.localStorage.getItem('consumo')
var tarifa= window.localStorage.getItem('tarifa')



var inc = [0,0,0,0,0,0,0,0,0,0,0,0];

var meses= ['jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

if(email !=null &&
nome != null &&
Estado != null &&
consumo != 0 &&
tarifa != null )
{
  var media = 0;
  var canvas = document.getElementById("grafico");
  var ctx = canvas.getContext('2d');
  /**cria eixo y
  ctx.beginPath();

  ctx.moveTo(0,canvas.height/1.07);

  ctx.lineTo(canvas.width,canvas.height/1.07);
 
  ctx.stroke();

ctx.fillText('kWh', 15, 20,);**/
  /**cria eixo x
  ctx.beginPath();

  ctx.moveTo(10,canvas.height);

  ctx.lineTo(10,0);

  ctx.stroke();

  ctx.fillText('mês', canvas.width - 29, canvas.height/1.01); **/

  //cria o gráfico de energia(kwh)x mês e calcula a média de incidência
  for (i=0; i<12; i++){

    inc[i] = window.localStorage.getItem("incidencia"+ i);
    console.log(inc[i])
    //muda a cor dos retângulos
if (parseInt(inc[i]) < 16){
  ctx.fillStyle="rgba(56,146,201,0.8)";
}
else if (parseInt(inc[i])  < 20) {
  ctx.fillStyle="rgba(56,146,201,0.8)";
}
else {
  ctx.fillStyle="rgba(56,146,201,0.8)";


}

var y=Math.floor (parseInt(inc[i])*16.67/1000*30*8);
    ctx.fillRect(28 +43*i , parseInt(inc[i])*16.67/1000*30*8, 26,-parseInt(inc[i])*16.67/1000*30*8 + canvas.height/1.07);

    ctx.fillStyle="black"

    ctx.fillText(meses[i],33 + 43*i, canvas.height/1.02);


    media = parseInt(media,10) + parseInt(inc[i],10);
  }

 media = Math.floor(100*media/12)/100;

//considera-se para os calculos que a incidência é dada em MJ/(m^2.dia)
// e que cada placa tem uma área de 2.01 metros quadrados


  var placa = Math.floor(3.6*consumo/(media*0.5*30*2.01));

  //tratamento caso o número de placas seja nulo
i=1;
while(placa < 1){

  media = media/i;

  placa = Math.floor(1000*consumo/(260*8*30*0.5));
console.log(placa);
  i++;
}
/*
  var inv = Math.floor(placa*36/1000) + 1

  var preço = 780*placa + 5000*inv ;

  console.log(inv);
  console.log(placa);
  var payback = 1000*preço/(12*0.6*0.5*8*30*placa*260);
  payback= Math.floor(100* payback)/100

*/

//coloca para o usuário ver


document.getElementById("texto-nome").innerHTML="Prezado(a) " + nome + ",";
document.getElementById("texto-placas").innerHTML= placa ;
document.getElementById('texto-area').innerHTML = Math.floor(100*placa*2.01)/100 + " metros quadrados."
document.getElementById("div-simulador").style.display="block";
document.getElementById("consumo-dinheiro").innerHTML= "R$" + Math.floor(consumo*0.52*12) + " a R$" + Math.floor(consumo*0.66*12) 

}

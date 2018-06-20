var media = 0;
for(i=1;i<=4;i++){
  var numero
  var resposta= window.localStorage.getItem(i.toString())

  if (resposta == "sempre"){
    numero = 5;
  }

  else if (resposta == "frequentemente"){
    numero = 4;
  }


  else if (resposta == "as vezes"){
    numero = 3;
  }
  else if (resposta == "raramente"){
    numero = 2;
  }
  
  else if (resposta == "nunca"){
    numero = 1;
  }
  media = media + numero
}
 resposta= window.sessionStorage.getItem("5")
if (resposta == "sim"){
  numero = 5;
}

else if (resposta == "nao"){
  numero = 1;
}

media = media + numero
resposta= window.sessionStorage.getItem("6")
if (resposta == "sim"){
  numero = 5;
}

else if (resposta == "nao"){
  numero = 1;
}

media = media + numero

media = media/6

if (media < 2){
  document.getElementById("texto-nome").innerHTML = "Você está desperdiçando muita energia."+ 
  "Sua conta pode estar até 40% mais cara. Tome cuidado." +
  "Olhe nosso e-book gratuito para ter saber onde começar! "

document.getElementById("div-quiz").style.display="block"

}

else if (media < 3){
  document.getElementById("texto-nome").innerHTML = "Você conhece algumas dicas de economia de energia,"+ 
  "mas ainda pode economizar mais." +
"Olhe nosso e-book gratuito para ter mais ideias!"
document.getElementById("div-quiz").style.display="block"


}


else if (media <= 5){
  document.getElementById("texto-nome").innerHTML = "Parabéns, você anda se prevenindo e está economizando bem. Porém, sempre há formas de melhorar."+
  "Olhe nosso e-book gratuito!"
document.getElementById("div-quiz").style.display="block"


}


document.getElementById("resposta").onclick=function(){

window.localStorage.setItem("1",document.getElementById("lig").value)
window.localStorage.setItem("2",document.getElementById("lamp").value)
window.localStorage.setItem("3",document.getElementById("ar").value)
window.localStorage.setItem("4",document.getElementById("banho").value)
window.localStorage.setItem("5",document.getElementById("led").value)
window.localStorage.setItem("6",document.getElementById("geladeira").value)


}
console.log(document.getElementById("geladeira").value);
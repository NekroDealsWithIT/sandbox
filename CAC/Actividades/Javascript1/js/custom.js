function calcular(){
	let n1=document.querySelector("#n1").value
	let n2=document.getElementById("n2").value
	let resultado=document.querySelector(".resultado")

	resultado.innerText=`El resultado de la suma de las dos variables es:
	${n1*1+n2*1}`
}
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

const inputTexto2 = document.querySelector(".input-texto");
const mensagem2 = document.querySelector(".mensagem");

function btnEncriptar() {
	const textoEncriptado = encriptar(inputTexto.value)
	mensagem.value =textoEncriptado
	mensagem.style.background="none"
}


function encriptar(stringEncriptada) {
	let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i=0; i < matrixCodigo.length; i++) {
		if(stringEncriptada.includes(matrixCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
		}
	}

	return stringEncriptada;
}

function btnDescriptar() {
	const textoDescriptado = descriptar(inputTexto2.value)
	mensagem2.value =textoDescriptado
	mensagem2.style.background="none"
}

function descriptar(stringDescriptada) {
	//let matrixCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
	let matrixCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
	stringDescriptada = stringDescriptada.toLowerCase();

	for(let i=0; i < matrixCodigo.length; i++) {
		if(stringDescriptada.includes(matrixCodigo[i][0])) {
			stringDescriptada = stringDescriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
		}
	}

	return stringDescriptada;
}

function copiaTexto(){
	var texto = document.getElementById('txt');
	texto.select();
	texto.setSelectionRange(0, 9999);
	document.execCommand('copy');
	
	alert('Texto copiado ==> '+ texto.value);
	
}
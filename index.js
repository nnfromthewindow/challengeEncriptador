let botonEnc = document.getElementById("btnEnc");
let botonDec = document.getElementById("btnDec");
let input = document.getElementById("inputCodigo");
let output = document.getElementById("outputCodigo");
let permitidas = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90,
];
let especiales = [8, 13, 16, 37, 32, 39, 46];
let caps = document.getElementById("capsOn");

//INICIO ALERTA CAPSLOCK VACIA
caps.style.display = "none";

//FOCUS EN INPUT AL INICIAR LA PAGINA
document.getElementById("inputCodigo").focus();

//FUNCION PARA VALIDAR EL INPUT
function lowCaseValidation() {
  input.onkeydown = function (e) {
    if (
      e.shiftKey == true ||
      (e.getModifierState("CapsLock") == true &&
        !especiales.includes(e.keyCode))
    ) {
      e.returnValue = false;
    }

    if (permitidas.includes(e.keyCode) || especiales.includes(e.keyCode)) {
      e.returnValue = true;
    } else {
      e.returnValue = false;
    }
  };
  document.onkeydown = function (e) {
    if (e.getModifierState("CapsLock")) {
      caps.style.display = "block";
    } else {
      caps.style.display = "none";
    }
  };
}
//BOTON ENCRIPTAR
botonEnc.onclick = function () {
  var result = "";

  for (let i = 0; i < input.value.length; i++) {
    switch (input.value.charAt(i)) {
      case "a":
        result += "ai";
        break;
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += input.value.charAt(i);
    }
  }
  output.value = result;
  input.value = "";
  document.getElementById("inputCodigo").focus();
};
//BOTON DESENCRIPTAR
botonDec.onclick = function () {
  var deco = input.value;

  deco = deco.replaceAll("ai", "a");
  deco = deco.replaceAll("enter", "e");
  deco = deco.replaceAll("imes", "i");
  deco = deco.replaceAll("ober", "o");
  deco = deco.replaceAll("ufat", "u");

  output.value = deco;
  input.value = "";
  document.getElementById("inputCodigo").focus();
};

//BOTON COPIAR--------------------------------------------
function copy() {
  var copyText = document.querySelector("#outputCodigo");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
//-------------------------------------------------------------

//INICIAMOS VALIDADOR
lowCaseValidation();

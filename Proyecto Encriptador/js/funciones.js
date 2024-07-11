function encriptar() {
   let textarea = document.getElementById("text")

   let textodearea = textarea.value; 

   let textoguardado = textodearea;

   let textoEncriptado = "";


   for (let i = 0; i < textoguardado.length; i++) {
    let letra = textoguardado[i];
    
    switch(letra) {

        case"a": textoEncriptado += "ai";
        break;

        case"e": textoEncriptado += "enter";
        break;

        case"i": textoEncriptado += "imes";
        break;

        case"o": textoEncriptado += "oder";
        break;

        case"u": textoEncriptado += "ufat";
        break;

        default: textoEncriptado += letra;
        break;

        

    }

    mostartextoencriptado(textoEncriptado);

}
 
    return console.log(textoEncriptado);

}


function mostartextoencriptado(textoEnc) {

    if(textoEnc.length > 0 ){ 

        let Presultado = document.querySelector(".resultado");
        Presultado.innerHTML = textoEnc;

        let imgmuneco = document.querySelector(".muneco");
        imgmuneco.style.display="none";

        
        let nomsj = document.querySelector(".nomsj");
        nomsj.style.display="none";

        
        let msjingre = document.querySelector(".msjingre");
        msjingre.style.display="none";
        
        let copiar= document.querySelector(".copiar");
        copiar.style.display="block";
        
}
}

function desencriptar() {

    alert("deseencriptando");

}

function copiar() {

    alert("copiando");

}
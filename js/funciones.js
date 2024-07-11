function encriptar() {
    let textarea = document.getElementById("text")

    let textodearea = textarea.value.toLowerCase();

    let textoguardado = textodearea;



    let matrizClaves =
        [
            ["e", "enter"],
            ["i", "imes"],
            ["a", "ai"],
            ["o", "ober"],
            ["u", "ufat"]
        ];
    console.log(textoguardado);

    for (let i = 0; i < matrizClaves.length; i++) {

        let clave = matrizClaves[i][0].toLowerCase();

        if (textoguardado.includes(clave)) {

            textoguardado = textoguardado.replaceAll(clave, matrizClaves[i][1]);

        }

    }

    mostartextoencriptado(textoguardado);
    return console.log(textoguardado);

}


function mostartextoencriptado(textoEnc) {


    //VARIABLES

    let Presultado = document.querySelector(".resultado");//ESTO ES UNA VARIABLE DEFINIDA E INICIALIZADA

    let imgmuneco = document.querySelector(".muneco");
    let nomsj = document.querySelector(".nomsj");
    let msjingre = document.querySelector(".msjingre");
    let copiar = document.querySelector(".copiar");

    console.log("Longitud de textoEnc:", textoEnc.length);
    console.log("Tipo de textoEnc:", typeof textoEnc);

    if (textoEnc.length > 0) {
        //INSTRUCCIONES IF
        Presultado.innerHTML = textoEnc;
        Presultado.classList.add("Activa");
        Presultado.classList.remove("Inactiva");

        nomsj.classList.add("Inactiva");
        nomsj.classList.remove("Activa");

        msjingre.classList.add("Inactiva");
        msjingre.classList.remove("Activa");

        imgmuneco.classList.add("Inactiva");
        imgmuneco.classList.remove("Activa");

        copiar.classList.add("Activa");
        copiar.classList.remove("Inactiva");

    } else {
        console.log("entramos al else");
        Presultado.innerHTML = "";

        Presultado.classList.remove("Activa");
        Presultado.classList.add("Inactiva");

        nomsj.classList.remove("Inactiva");
        nomsj.classList.add("Activa");

        msjingre.classList.remove("Inactiva");
        msjingre.classList.add("Activa");

        imgmuneco.classList.remove("Inactiva");
        imgmuneco.classList.add("Activa");

        copiar.classList.remove("Activa");
        copiar.classList.add("Inactiva");
    }
}

function desencriptar() {

    let matrizClaves =
        [
            ["e", "enter"],
            ["i", "imes"],
            ["a", "ai"],
            ["o", "ober"],
            ["u", "ufat"]
        ];

    let textarea = document.querySelector("#text");

    let textoEncriptado = textarea.value.toLowerCase();



    for (let i = 0; i < matrizClaves.length; i++) {

        let clave = matrizClaves[i][1].toLowerCase();

        if (textoEncriptado.includes(clave)) {

            textoEncriptado = textoEncriptado.replaceAll(clave, matrizClaves[i][0]);

        }

    }
    mostartextoencriptado(textoEncriptado);
    return textoEncriptado;
}


function copiar() {
    let pResultado = document.querySelector(".resultado");

    let rango = document.createRange();

    rango.selectNodeContents(pResultado);

    let seleccion = window.getSelection();

    seleccion.removeAllRanges();

    seleccion.addRange(rango);


    document.execCommand("copy");

    seleccion.removeAllRanges();

}

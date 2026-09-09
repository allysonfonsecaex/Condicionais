let nota, resultado;

function Verificar()
{
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if(nota < 5){
        resultado.innerHTML = "Reprovado";
    }

    else if(nota < 7){
        resultado.innerHTML = "Recuperação"
    }
    else{
        resultado.innerHTML = "Aprovado";
    }
}
// Exercicio a)


let A, B, resultado1;

function Diferenca()
{
    A = parseInt(document.getElementById("A").value);
    B = parseInt(document.getElementById("B").value);
    resultado1 = document.getElementById("resultado1");

    if( A < B ){
        resultado1.innerHTML =  B - A
    }
    
    else if ( B < A ){
        resultado1.innerHTML =  A - B
    }

    else{
         resultado1.innerHTML = "Sem diferença"
    }
}

// Exercicio b)
let N1, N2, N3, N4, MD, resultado_2;
function Media()
{
    N1 = parseInt(document.getElementById("N1").value);
    N2 = parseInt(document.getElementById("N2").value);
    N3 = parseInt(document.getElementById("N3").value);
    N4 = parseInt(document.getElementById("N4").value);
    resultado_2= document.getElementById("resultado_2");

    MD = (N1 + N2 + N3 + N4) / 4

    

    if(MD >= 5){
        resultado_2.innerHTML = "Aprovado a sua media é  " + MD
    }
    else{
        resultado_2.innerHTML = "Reprovado a sua media é  " + MD
    }

}



document.querySelector('.formulario').addEventListener('submit', function(event){

    var nome = document.querySelector('#nome').value;
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;

    
    if (nome == ""){

        document.querySelector(".erro").style.visibility = "visible";

        var input = "nome";
        var mensagemErr = "A caixa de " + input + " está vazia.";
        document.querySelector('#erro').innerHTML = mensagemErr;


    }else if(peso == "" || peso == 0){

        document.querySelector(".erro").style.visibility = "visible";

        var input = "peso";
        var mensagemErr = "A caixa de " + input + " está vazia.";
        document.querySelector('#erro').innerHTML = mensagemErr;


    }else if(altura == "" || altura == 0){

        document.querySelector(".erro").style.visibility = "visible";

        var input = "altura";
        var mensagemErr = "A caixa de " + input + " está vazia.";
        document.querySelector('#erro').innerHTML = mensagemErr;
    }else {

        

        imc = peso / (altura * altura);
        var classificacao;
        
        

        if (imc <= 18.5) {
            classificacao = "Abaixo do peso.";
        } else if (imc >= 18.6 && imc <= 24.9) {
            classificacao = "Peso ideal";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Levemente acima do peso.";
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = "Obesidade grau I.";
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = "Obesidade grau II.";
        } else if (imc >= 40) {
            classificacao = "Obsidade grau III.";
        }


        var resultado = "Olá, " + nome + "! Seu IMC é " + imc.toFixed(2) + "\n" +
        "E seu resultado é: " + classificacao;
        document.querySelector('#resultado').innerHTML = resultado;
        };

});


//limpar formulario 

document.querySelector('.limpar').addEventListener('submit', function(event){

    document.querySelector('.formulario').reset();
    document.querySelector('#resultado').innerHTML = "";
})



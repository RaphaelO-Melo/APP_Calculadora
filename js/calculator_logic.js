//Função que chama funções secundárias para efetuar o cálculo
function calcular(tipo, valor){

    //Chama função para validar a entrada do usuário
    if(trataEntrada(tipo)){
        //Verifica o tipo da entrada
    if(tipo === 'acao'){
        trataAcao(valor);
        
    }else if(tipo === 'valor'){
        //Seleciona o display do resultado e acrescenta o número selecionado
        document.getElementById('display-resultado').value += valor;
    }
    } 
}


//Função que realiza validação da ação do usuário
function trataEntrada(tipo){

    //Verifica se a ação é do tipo de operação
    if(tipo === 'acao'){
        //Obtém o valor atual do último char da String
        var valor_atual = document.getElementById('display-resultado').value;
        var ultimo_char = valor_atual.charAt(valor_atual.length - 1);
        //Verifica se o último valor dela também é uma operação
        if(ultimo_char === '+' || ultimo_char === '-' || ultimo_char === '*' || ultimo_char === '/' || ultimo_char === '.'){
            //Caso seja, retorna falso e interrompe o fluxo
            return false;
        }else {
            return true;
        }
    }else{
        return true;
    }
}

//Função que realiza o tratamento dos valores do tipo ação
function trataAcao (valor){
    switch(valor){
        case 'c':
            //Limpar o visor
            document.getElementById('display-resultado').value = '';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            document.getElementById('display-resultado').value += valor;
            break;

        case '=':
            exibirResultado();
    }
}

//Função que converte a String e obtém o resultado da operação
function exibirResultado(){
    var valor_campo = document.getElementById('display-resultado').value;
    document.getElementById('display-resultado').value = eval(valor_campo);
}
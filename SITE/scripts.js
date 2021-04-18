// ***********************
// ***** CONCEITOS *******
// *********************** 
// JS é uma liguagem de tipagem dinâmica (as variáveis podem mudar de tipo)

// *************************
// ***** BOAS PRÁTICAS *****
// *************************
// camelCase => declarar váriaveis iniciando com "minusculasDepoisMaiusculas"

// ********************
// ***** CONTEÚDO *****
// ********************
// ***** VARIAVÉIS POR TIPO DE VALOR ***** //

let nome = 'Ana'; //string
let sobrenome; // indefinido (undefined) {assumirá o tipo do valor quando preenchido}
let idade = 24; // number
let altura = 1.69; // number (não há diferenciação de float/int)
let emRelacionamento = true; // boolean
const nomeNamorado = 'David'; // constante do tipo string
const amaMuito = true; //constante do tipo boolean

// também poderíamos declarar os "lets" da seguinte forma e dar valores depois:
let nome2, sobrenome2, idade2, altura2, emRelacionamento2;
nome2 = 'David';
idade2 = 29;
altura2 = 1.83;
emRelacionamento2 = true;
const nomeNamorada = 'Ana'; // constantes precisam ser inicializadas sempre
const amaMuito2 = true;


// ***** VARIAVÉIS POR REFERÊNCIA ***** //
// OBJETOS
let pessoa = {
    nome: 'Ana',
    sobrenome,
    idade: 24,
    altura: 1.69,
    emRelacionamento: true,
    nomeNamorado: 'David',
    amaMuito: true
}

// ARRAYS
let idadesCasal = [24,29];
console.log(idadesCasal);
console.log(idadesCasal[0]);
console.log(idadesCasal[1]);

let ana = ['Ana',24,1.69,true,'David',true];
console.log(ana);

// FUNÇÕES
// Ao pensar no nome boa prática: Verbo + Substantivo
let corSite = 'Azul';
function resetaCorSite(){
    corSite = '';
}

console.log(corSite);
resetaCorSite();
console.log(corSite);

// TIPOS DE FUNÇÃO
// SEM RETORNO => realiza uma tarefa, mas não tem retorno
function dizerNome(){
    console.log('Meu nome é David');
}
dizerNome();

// COM RETORNO => realiza tarefa e retorna valor que pode ser usado para lógica
function multiplicarPorDois (numero){
    return numero * 2;
}

let resultado = multiplicarPorDois(5);
console.log(resultado);

// OPERADORES
// Atribuição { = } 
let numero = 3;

// Aritiméticos/Matemáticos { +, -, /, *, ** }
resultado = numero + numero;
console.log(resultado);
resultado = numero - numero;
console.log(resultado);
resultado = numero / numero;
console.log(resultado);
resultado = numero * numero;
console.log(resultado);
resultado = numero ** numero;
console.log(resultado);

// Incremento/Decremento { ++, -- }
numero = 3;
console.log(numero++);
console.log(numero);
numero = 3;
console.log(++numero);

// Comparação { == ou === }
// Igualdade solta
console.log(3 == 3);
console.log('3' == 3);

// Igualdade estrita
console.log(3 === 3);
console.log('3' === 3);

// Lógicos { &&, ||, ! }
// && (AND) Retorna TRUE somete se os dois operandos forem true
let maiorIdade = true;
let possuiCarteiraMoto = false;
let podeDirigirMoto = maiorIdade && possuiCarteiraMoto;
console.log('AND | Pode dirigir moto: ' + podeDirigirMoto);

maiorIdade = true;
possuiCarteiraMoto = true;
podeDirigirMoto = maiorIdade && possuiCarteiraMoto;
console.log('AND | Pode dirigir moto: ', podeDirigirMoto);

// || (OR) Retorna TRUE quando qualquer um dos dois operandos for true
maiorIdade = true;
possuiCarteiraMoto = false;
podeDirigirMoto = maiorIdade || possuiCarteiraMoto;
console.log('OR | Pode dirigir moto: ', podeDirigirMoto);

maiorIdade = true;
possuiCarteiraMoto = true;
podeDirigirMoto = maiorIdade || possuiCarteiraMoto;
console.log('OR | Pode dirigir moto: ', podeDirigirMoto);

maiorIdade = false;
possuiCarteiraMoto = false;
podeDirigirMoto = maiorIdade || possuiCarteiraMoto;
console.log('OR | Pode dirigir moto: ', podeDirigirMoto);

// ! (NOT) inverte o valor lógico
maiorIdade = true;
possuiCarteiraMoto = true;
console.log('NOT | Maior de idade: ', !maiorIdade);
console.log('NOT | Possui carteira de moto: ',  !possuiCarteiraMoto);

// Comparação lógica com valores não booleanos
// Falsy => todos os valores que são { undefined, null, 0, false, '', NaN }
// O operador OR retorna sempre o valor do operando truthy
// false || true    => true
// false || 'David' => 'David'
// false || 29      => 29

// Truthy
// Quaisquer valores não encaixados no Falsy {strings, numbers, true...}
let cor1 = 'vermelho';
let cor2 = 'azul'
let escolhaCor = cor1 || cor2;
console.log('Escolha de cor:', escolhaCor);

cor1 = ''; // valor falsy
cor2 = 'azul'
escolhaCor = cor1 || cor2;
console.log('Escolha de cor:', escolhaCor);

// Ternário { logica ? 'verdadeiro' : 'falso' }
let pontos = 100;
let tipo = pontos >= 100 ? 'Premium' : 'Comum';
console.log(tipo);

// Bitwise { }




// Atalhos VSCODE

// Quebrar as linhas para visualizar melhor
// => ALT + Z

// Comentar várias linhas ao mesmo tempo
// => selecionar-as-várias-linhas + CTRL + ;

// Duplicar linhas para baixo
// => SHIFT + Alt + seta-para-baixo ou seta-para-cima

// Selecionar todas as repetições de código e editar junto
// => CTRL + F2




// CONSTRUINDO A PÁGINA
// MENU NO CELULAR
const menuNoCelular = document.querySelector('.menu-no-celular');
const animacaoMenu = document.querySelector('nav ul');
let menuAberto = false;

menuNoCelular.addEventListener('click', () => {
    if(!menuAberto) {
        menuNoCelular.classList.add('open');
        animacaoMenu.classList.add('open');
        menuAberto = true;
    } else {
        menuNoCelular.classList.remove('open');
        animacaoMenu.classList.remove('open');
        menuAberto = false;
    }
});



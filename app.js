'use strict'

//usar o solid para aprender boas práticas

//importando o objeto showArray
import { showArray } from "./modulos_js/showArray.js"

const numbers = [23, 5, 9, 100, 45, 2, 10, 22]

//MAP - Percorre todo o array e retorna um array,
//      do mesmo tamanho modificado ou não
//Sintaxe: array.map(callback)
//Parametros do callback:
//1- Elemento
//2- Indice
//3- Array

//função que vai descontar 2 números
const desconto2 = (number) => number - 2
const numbersDesconto = numbers.map(desconto2)

//Filtrar os elementos menores que 20
//Usa falso ou verdadeiro (boolean). OBRIGATÓRIO
const menor20 = (valor) =>valor < 20
const valoresMenoresQue20 = numbers.filter(menor20)

//Somar todos os valores
const soma = (a,b) => a+b
const valorTotal = numbers.reduce(soma,0) 

//AUMENTAR 100 EM CADA ELEMENTO
//Somente os números pares
//Total dos valores com desconto de 4
//Array com todos os elementos ímpares somando 21
const add100 = (a) => a+100
const aumentar100 = numbers.map(add100)

const numerosPares = (valores) => valores % 2 == 0 
const somentePares = numbers.filter(numerosPares)

const desconto4 = (a, b) => a-4
const valorTotalDesconto = numbers.map(desconto4).reduce(soma, 0)

const imparesNoArray = (valores) => valores%2 !=0
const valoresSomando21 = (valores) => valores+21
const impares = numbers.filter(imparesNoArray).map(valoresSomando21)

showArray(numbers, 'main', 'Todos os números')
showArray(numbersDesconto, 'main', 'Números descontados')
showArray(valoresMenoresQue20, 'main', 'Valores menores que 20')
showArray([valorTotal], 'main', 'Soma dos valores')
showArray(aumentar100, 'main', 'Aumentando 100')
showArray(somentePares, 'main', 'Somente números pares')
showArray([valorTotalDesconto], 'main', 'Valores com desoconto em 4')
showArray(impares, 'main', 'Impares somando 21')
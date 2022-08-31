'use strict'

//criando objeto da função showArray
const showArray = (array, element, title) => {
    //criando elemento no DOM
    const containerMain = document.querySelector(element)

    //criando elemento pai (uma div)
    const div = document.createElement('div')

    //atribuindo classe a div
    div.classList.add('numbers-container')

    //Preenchendo a div com os elementos do array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class = "numbers-item">
            ${array.join('</div><div class  = "numbers-item">')}
        </div>
    `

    //inserindo o novo elemento (div) no DOM 
    containerMain.appendChild(div)
}

//exportar em front
export{
    showArray
}
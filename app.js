'use strict'

const switcher = document.querySelector('.btn'); /* referência do botão */

switcher.addEventListener('click', function() { /* método toggle para alterar o elemento para a classe dark-theme */
    document.body.classList.toggle('dark-theme')

    var className = document.body.className; /* Instrução if para verificar o tema atual e atualizar o rótulo do botão */
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light"; 
    }

    console.log('current class name: ' + className);
});
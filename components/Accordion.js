import {loadCss} from "./utils.js"

loadCss("Accordion")

/**
 * 
 * @param {{ title: string; content: string}} props
 * @returns {HTMLElement}
 */



export function Accordion(props) {
    const data = props.data;
    console.log(data);

    //criando uma div para armazenar os accordions
    const element = document.createElement("div");
    //adicionando a classe no elemento
    element.classList.add("accordion");

    //percorrendo os dados do nosso array
    for (let index = 0; index < data.length; index += 1) {
        //pegando o dado atual do loop
        const item = data[index];
        //adicionando o acordion-item do elemento
        element.append(AccordionItem(item));
    }

    //retornando o elemento para quem o chamou
    return element;
}


function AccordionItem(props) {
    const title = props.title;
    const content = props.content;

    //criando um elemento div para o html pelo javascript
    const element = document.createElement("div");
    //adicionando uma classe no elemento que acabei de criar
    element.classList.add("accordion-item");
    //criando um elemento header para o html pelo javascript
    const titleElement = document.createElement("header");
    //colocando um conteudo no header
    titleElement.innerText = title;

titleElement.onclick = function () {
//adicionando.removendo a classe active do .accordion
element.classList.toggle('active');
}
    //criando uma div para o conteudo para o html pelo javacript
    const contentElement = document.createElement("div");
    //adicionando uma classe no elemento que eu criei
    contentElement.classList.add("accordion-content");
    //criando um elemento para colocar o conteudo dentro
    const contentText = document.createElement("p");
    //adicionando o texto dentro do p
    contentText.innerText = content;
    //colocando o p dentro da div content
    contentElement.append(contentText);
    //adicionando o header e div.accordion-content dentro do elemento
    element.append(titleElement, contentElement);

    return element;
}
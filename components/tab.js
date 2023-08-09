import { loadCss } from "./utils.js";

loadCss("tab");

/**
 * 
 * @param {{data: {title: string, children: any| any[]}[]}}props
 * @returns 
*/

export function Tab(props) {
    //componente do tab
    const wrapper = document.createElement("div");
    wrapper.classList.add("tab");

    //elemento que vai conter os botões do tab
    const header = document.createElement("div");
    header.classList.add("tab-header");

    //elemento que vai conter os conteudos
    const content = document.createElement("div");
    content.classList.add("tab-content");

//vou armazenar os itens actives aqui
const actives =[]

    //percorrendo os items que devem ser montados
    props.data.forEach(function (item, index) {
        //montando o item o botão
        const tabItem = TabItem({ title: item.title })
        //montando o item do conteudo referente ao botao
        const tabContent = TabContent({ children: item.children })

        //inserindo o botao no lugar dele
        header.append(tabItem);
        //inserindo o conteudo no lugar dele
        content.append(tabContent);

        //se for o primeiro item do nosso array,
        if (index === 0 ) {
//adicionamos a classe 'active'em cambos para ficar visivel
tabItem.classList.add('active')
tabContent.classList.add('active')
        }
tabItem.addEventListener('click', function(){
//removi a classe active dos elementos 
actives.forEach(function (active) {
    active.classList.remove("active");
})

//limpando meu array
actives.splice(0, actives.length);

//adicionamos a classe 'active'em ambos para ficar visivel
tabItem.classList.add('active');
tabContent.classList.add("active");

//adicionando os itens com classe .active
actives.push(tabItem, tabContent);
})
    });

    //inserindo os elementos no componente
    wrapper.append(header, content)

    //retornando o componente
    return wrapper;
}

/**
 * 
 * @param {{title: string}} props
 * 
 */

function TabItem(props) {
    //montando o componente do botão da tab
    const item = document.createElement("div");
    //adicionando a classe do botão da tab
    item.classList.add("tab-header-item");
    //inserindo o text no botão da tab
    item.innerText = props.title;

    //retornando o componente
    return item;
}

/**
 * 
 * @param {{ children: any | any[]}} props
 * @returns
 */

function TabContent(props) {
    //montando o componente do conteudo da tav
    const content = document.createElement("div");
    //adicionando a classe do conteudo da tab
    content.classList.add("tab-content-item");

    //pegando o dado como array para inserir ele como conteudo
    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];

    //inserindo o conteudo no componente do conteudo da tab
    content.append(...children);

    //retornando o componente do conteudo da tab
    return content;
}


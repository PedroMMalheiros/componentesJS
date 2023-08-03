import { loadCss } from './utils.js'

loadCss('Section')

/**  este componente vai nos retornar uma sesão com titulo
*
*@param {{ title: string; children: any}} props
*@returns 
*
**/

export function Section(props) {
    //criando a tag section
    const section = document.createElement("section");
    //criando uma tag h2
    const header = document.createElement("h2");

    //adicionando a classe .section para personalizar no css
    section.classList.add('section')
    //inserindo o titulo passado pelas propriedades
    header.innerText = props.title;

//criando o content para inserir os filhos passados
const content = document.createElement('div')
content.classList.add('content')

//inserindo o conteudo passado pelas propriedades como filho

// ?: é conhecido como "Elvis operator" ou "Ternario"
// é como um if/else de 1 unica linha
const children = Array.isArray(props.children)
? props.children
:[props.children];
//... é conhecido como "spread operator"
// ele pega o array e passa os valores como se estivesse 
// separando seus conteudo por virgula
content.append(...children);
//inserindo o header e content como filhos do componente
section.append(header, content);


    //retornando o componente
    return section;
}
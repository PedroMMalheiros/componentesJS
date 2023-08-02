const CSS_LOADED = {

}

export function loadCss(name){
    if (typeof CSS_LOADED[name] !== 'undefined') return;

    // se chegou aqui, o arquivo ainda nao foi carregado
    //criamos uma tag link para vincular o css
const link =document.createElement('link');
//adicionamos o atributo rel = "stylesheet"
link.setAttribute('rel', 'stylesheet');
// adicionamos o arquivo que vai ser carregado
link.setAttribute('href', `components/${name}.css`);

//adicionamos o link no head do html
document.head.append(link);

//informamos que o arquivo já foi carregado
CSS_LOADED[name] = true;
}
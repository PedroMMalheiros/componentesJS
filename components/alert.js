import { loadCss} from './utils.js'

loadCss('Alert')

/**
 * cores validas
 */
const COLORS = ['blue', 'green', 'red', 'yellow'];

/**
 *
 * este componente vai retornar um alert
 * 
 * @param {{ text: string; color: string}} props 
 */

export function Alert(props){
const element = document.createElement('div')
element.classList.add('alert')

//validamos se a cor é vcalida
if (COLORS.includes(props.color)){
    element.classList.add(`alert-${props.color}`)
}

//validamos as cores validas

const text = document.createElement('p')
text.innerText = props.text

element.append(text)

return element
}
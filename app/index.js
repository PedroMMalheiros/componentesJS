import { Accordion } from "../components/index.js";

//propriedades que iremos passar para a função Accordion
const accordionProps = {
    data:[
{
    title:"Accordion #1",
    content:"Blablablalbalbalbla",
},

{
    title:"Accordion #2",
    content:"bleblebleble",
},
{
    title:"Accordion #3",
    content:"blibliblibli",
},

    ],
};

document.body.append(Accordion(accordionProps));

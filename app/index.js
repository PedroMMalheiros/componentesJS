import { Accordion, Alert, Section } from "../components/index.js";

//propriedades que iremos passar para a função Accordion
const accordionProps = {
    data: [
        {
            title: "Accordion #1",
            content: "Blablablalbalbalbla",
        },

        {
            title: "Accordion #2",
            content: "bleblebleble",
        },
        {
            title: "Accordion #3",
            content: "blibliblibli",
        },

    ],
};

document.body.append(
    Section({
        title: Accordion.name,
        children: Accordion(accordionProps),
    }),
    Section({
title: Alert.name,
children: [
    Alert({ text: "Hello, World", color:"blue"}),
    Alert({ text: "Hello, World", color:"green"}),
    Alert({ text: "Hello, World", color:"red"}),
    Alert({ text: "Hello, World", color:"yellow"}),
    ],
})
    
    );




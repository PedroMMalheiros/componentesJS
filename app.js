import { Accordion, Alert, Section, Button, Tab } from "./components/index.js";

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
            Alert({ text: "Hello, World", color: "blue" }),
            Alert({ text: "Hello, World", color: "green" }),
            Alert({ text: "Hello, World", color: "red" }),
            Alert({ text: "Hello, World", color: "yellow" }),

        ],
    }),

    Section({
        title: Button.name,
        children: [
            Button({ children: "Botão 1" }),
            Button({ children: "Botão 2", Type: "button" }),
            Button({ children: "Botão 3", Type: "button", color: "red" }),
            Button({
                children: "botão 4",
                type: "button",
                color: "green",
                onclick: function () {
                    alert("on click funcionando");
                },
            })
        ]
    }),

    Section({
        title: Tab.name,
        children: [
            Tab({
                data: [
                    { title: "Accordions", children: Accordion(accordionProps) },

                    {
                        title: "Alerts",
                        children: [

                            Alert({ text: "Hello World red", color: "red" }),
                            Alert({ text: "Hello World Yellow", color: "yellow" }),
                        ],
                    },
                ]
            })
        ]
    })
);




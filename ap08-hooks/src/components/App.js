import Accordion from "./Accordion"

export default () => {
    const itens = [
        {
            título: "Java",
            conteúdo: "Linguagem compilada e interpretada"
        },
        {
            título: "Python",
            conteúdo: "Linguagem interpretada e dinamicamente tipada"
        },
        {
            título: "JavaScript",
            conteúdo: "Interpretada. Executada do lado do cliente e do lado do servidor também."
        }
    ]
    return <div>
        <Accordion itens={itens}/>
    </div>
}
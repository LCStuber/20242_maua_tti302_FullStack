import React from 'react'
import Card from 'primereact/card'
import './Accordion.css'

const Accordion = ({ itens }) => {
    const expressJSX = itens.map((item, índice) => {
        return (
            <Card key={índice} className='border-1 border-400'>
                <div>
                    <i className="pi pi-angle-down"></i>
                    <h5 className="inline ml-3">{item.título}</h5>
                </div>
                <p>{item.conteúdo}</p>
            </Card>
        )
    })
    return (
        <div>{
            expressJSX
        }</div>
    )
}

export default Accordion
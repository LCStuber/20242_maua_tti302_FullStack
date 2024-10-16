import React from "react";
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/Inputicon'
import { InputText } from 'primereact/Inputtext'

export default class Busca extends React.Component{

    state = {
        termoDeBusca: ''
    }

    render(){
        return (
            <div className="flex flex-column">
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search"></i>
                    <InputText
                        className='w-full'
                        onChange={this.onTermoAlterado}
                        placeholder={this.props.dica}
                    />
                </span>
            </div>
        )
    }
}

Busca.defaultProps = {
    dica: 'O que você deseja pesquisar?'
}
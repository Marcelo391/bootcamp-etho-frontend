import React from 'react';
import Button from '../../components/buttons/default/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Login(){

    return (
        <React.Fragment>            
            <Button primary >Entrar</Button>        
            <Button secondary >
                <FontAwesomeIcon className='iconSair' icon={faSignOutAlt} />
                <span >Sair da Conta</span>  
            </Button>
        </React.Fragment>
         
    )
}
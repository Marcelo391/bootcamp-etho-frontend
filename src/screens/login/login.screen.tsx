import React from 'react';
import Button from '../../components/buttons/default/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Grid } from '@mui/material';

export default function Login(){

    return (
        <React.Fragment>            
            <Container>
            <Grid container direction="column" justifyContent="center">
                <Grid item xs={4}>
                    <Button primary >Entrar</Button>        
                </Grid>
                <Grid item xs={4}>
                    <Button secondary >
                        <FontAwesomeIcon className='iconSair' icon={faSignOutAlt} />
                        <span >Sair da Conta</span>  
                    </Button>
                </Grid>
            </Grid>    
            </Container>            
        </React.Fragment>
         
    )
}
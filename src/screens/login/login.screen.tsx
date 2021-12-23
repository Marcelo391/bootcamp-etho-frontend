import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Grid } from '@mui/material';
import logo from '../../assets/icons/logo.svg';
import { Logo, Wrapper } from './login.styled';
import Form from './components/form.components';

export default function Login(){

    return (
        <React.Fragment>            
            <Container>
                <Wrapper container justifyContent="center">
                    <Grid item xs={3} justifyContent="center">
                        <Grid container justifyContent="center">
                            <Logo src={logo} alt={'Netflix Logo'} />
                            <Form />
                        </Grid>                          
                    </Grid>
                </Wrapper>
            {/* <Grid container direction="column" justifyContent="center">
                <Grid item xs={4}>
                    <Button primary >Entrar</Button>        
                </Grid>
                <Grid item xs={4}>
                    <Button secondary >
                        <FontAwesomeIcon className='iconSair' icon={faSignOutAlt} />
                        <span >Sair da Conta</span>  
                    </Button>
                </Grid>
            </Grid>     */}
            </Container>            
        </React.Fragment>
         
    )
}
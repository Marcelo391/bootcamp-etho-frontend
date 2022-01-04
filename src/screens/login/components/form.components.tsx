import React, { useCallback, useEffect, useState } from "react";
import Button from '../../../components/buttons/default/button.component';
import InputText from '../../../components/inputs/input.text/input-text.component';
import * as yup from 'yup';
import { ErrorMessage } from "./forms.types";
import { ErrorDescription } from "./form.styled";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user/user.slice";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../../store/user/user.selector";
import { HomePath } from "../../home/home.types";

const errorInicial = '';

export default function Form(){

    const [data, setData] = useState({email: '', password: ''});
    const [error, setError] = useState(errorInicial);
    //  const handleChange = (event: any) => setData(prevState => ({
    //      ...prevState,
    //      [event.target.name]:event.target.value,
    //  }));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isUserAuthenticated = useSelector(isAuthenticated);

    useEffect(
        () => {
            if(isUserAuthenticated){
                const to = location.state?.from?.pathname || HomePath
                navigate(to)
            }            
            
        },
        [isUserAuthenticated]
    )

    const resetError = useCallback(
        () => setError(errorInicial),
        []
    )

     const handleChange = useCallback(
         (event: any) => setData( prevState => ({
             ...prevState,
             [event.target.name]:event.target.value,
         })),
         [setData]
     )

     const validation = useCallback(
         async () => {
             const schema = yup.object().shape({
                 email: yup.string().required(ErrorMessage.Required).email(ErrorMessage.EmailBadFormat),
                 password: yup.string().required(ErrorMessage.Required),
             })

             try{
                 await schema.validate(data);

                 resetError();
                 console.log(true);
                 return true;
             }
             catch(error){            
                 //@ts-ignore
                 setError(error.errors[0]);
                 return false;
             }
         },
         [data, setError]
     )

     const onSubmit = useCallback(         
         async () => {
             if( await validation() ){
                 dispatch( userActions.login(data) );                 
             }
            //console.log(data);
         },
         [validation, data]
     )

     

    return (
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={handleChange} />            
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={handleChange}  />
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit} >Entrar</Button>          
        </>
    );
}
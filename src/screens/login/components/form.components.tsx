import React, { useCallback, useState } from "react";
import Button from '../../../components/buttons/default/button.component';
import InputText from '../../../components/inputs/input.text/input-text.component';
import * as yup from 'yup';
import { ErrorMessage } from "./forms.types";
import { ErrorDescription } from "./form.styled";

const errorInicial = '';

export default function Form(){

    const [data, setData] = useState({email: '', password: ''});
    const [error, setError] = useState(errorInicial);
    //  const handleChange = (event: any) => setData(prevState => ({
    //      ...prevState,
    //      [event.target.name]:event.target.value,
    //  }));

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
             await validation();
            //console.log(data);
         },
         [data]
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
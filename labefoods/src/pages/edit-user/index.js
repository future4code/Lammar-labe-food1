import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    GenericInput,
    Header
} from '../../components';
import { BASE_URL } from '../../constants/constants';
import { GlobalStateContext } from '../../global/globalStateContext';
import { useForm } from '../../hooks/useForm'
import { goToProfilePage } from '../../routes/Coordinator';
import { MarginDiv } from './style';


export function EditUserPage() {

    const navigate = useNavigate();

    const token = localStorage.getItem('token')

    // STATES

    const { validateWords, validateEmail, validatePassword, validateCPF, isValidated } = useContext(GlobalStateContext)

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCPFValid, setIsCPFValid] = useState(true);

    const [form, onChangeInputs] = useForm({
        name: '',
        email: '',
        cpf: ''
    });

    // FUNCTIONS

    const submitForm = (e) => {
        e.preventDefault();

        setIsNameValid(validateWords(form.name))
        setIsEmailValid(validateEmail(form.email))
        setIsCPFValid(validateCPF(form.cpf))

        if (validateWords(form.name) && validateEmail(form.email) && validateCPF(form.cpf) && validatePassword(form.password) && (form.password === form.confirmpsw)) {
            isValidated.current = true
        }

        isValidated.current && axios.put(`${BASE_URL}profile`, form, { headers: { auth: token } })
            .then(response => {
                console.log(response)
                isValidated.current = false
                goToProfilePage(navigate)
            })
            .catch(err => {
                alert(err.response.data.message)
                console.log(err)
            })
    }


    return (
        <FormsPageContainer>
            <Header buttonExists={true} pageTitle={'Editar'} />
            <MarginDiv />
            <FormContainer onSubmit={submitForm} >
                <GenericInput
                    value={form.name}
                    onChange={onChangeInputs}
                    name={'name'}
                    label={'Nome'}
                    placeHolder={'Nome e sobrenome'}
                    error={!isNameValid}
                    helperText={'Digite um nome com pelo menos 3 letras.'}
                    required={true}
                />
                <GenericInput
                    value={form.email}
                    onChange={onChangeInputs}
                    name={'email'}
                    label={'E-mail'}
                    placeHolder={'email@email.com'}
                    error={!isEmailValid}
                    helperText={'E-mail inválido.'}
                    required={true}
                />
                <GenericInput
                    value={form.cpf}
                    onChange={onChangeInputs}
                    name={'cpf'}
                    label={'CPF'}
                    placeHolder={'000.000.000-00'}
                    error={!isCPFValid}
                    helperText={'CPF inválido.'}
                    required={true}
                />
                <FormButton type='submit'>Salvar</FormButton>
            </FormContainer>
        </FormsPageContainer>
    );

}
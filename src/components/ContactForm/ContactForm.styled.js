import styled from 'styled-components';
import {Form, ErrorMessage} from 'formik';

export const FormStyled = styled(Form)`
    margin-top: 16px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    padding: 20px;
`;

export const Label = styled.label`
    font-size: 21px;
    display: block;
    padding: 4px 0;
`;

export const FieldWrapper = styled.div`
    height: 70px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    color: red;
`;
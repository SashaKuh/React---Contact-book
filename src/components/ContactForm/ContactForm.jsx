import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
    ErrorMessageStyled,
    FieldWrapper,
    FormStyled,
    Label,
} from './ContactForm.styled';
import { ButtonSubmit } from 'components/Section/Section.styled';

const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .length(9, `Number must have 9 symbol`)
        .trim()
        .matches(
            /[0-9]{3}-[0-9]{2}-[0-9]{2}/,
            'Number must be in the format 111-11-11'
        )
        .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
    return (
    <>
        <Formik
        initialValues={{
            name: '',
            number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={values => {
            onSubmit(values);
        }}
        >
        <FormStyled>
          <FieldWrapper>
            <Label htmlFor="name">Name</Label>
            <Field id="name" name="name" placeholder="Jane" />
            <ErrorMessageStyled component="div" name="name" />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="number">Number</Label>
            <Field id="number" name="number" placeholder="123-45-67" />
            <ErrorMessageStyled component="div" name="number" />
          </FieldWrapper>

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormStyled>
      </Formik>
    </>
  );
};







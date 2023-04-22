import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useUserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function LoginForm() {

    const navigate = useNavigate();
    const { setCurrentUser } = useUserContext();
    const { t } = useTranslation();

    const validationSchema = Yup.object().shape({
        email: Yup
        .string()
        .email(t('loginPage.emailValidation'))
        .required(t('loginPage.requiredFieldValidation')),
        password: Yup
        .string()
        .min(6, t('loginPage.passwordValidation'))
        .required(t('loginPage.requiredFieldValidation')),
      });

    return <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={ (values) => {
        // handle form submission
        setCurrentUser(
          {
            email: values.email, 
            roles: ['ADMIN'],
            id: '123123123',
            userName: "Albundy",
          })
        navigate('/');
    }}
  >
    {({ errors, touched }) => (
        <Form>
            <div className="form-group">
            <label htmlFor="email">
              {t('loginPage.email')}
            </label>
            <Field name="email" type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
            {errors.email && touched.email ? <div className="invalid-feedback">{errors.email}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="password">
              {t('loginPage.password')}
            </label>
            <Field name="password" type="password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
            {errors.password && touched.password ? <div className="invalid-feedback">{errors.password}</div> : null}
            </div>
            <div className="d-grid gap-2">
              <Button className="mt-3 text-white" type="submit" variant="primary">
              {t('loginPage.login')}
              </Button>
            </div>
        </Form>
    )}
  </Formik>
}

export default LoginForm


  

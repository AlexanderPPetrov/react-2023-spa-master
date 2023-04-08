import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useUserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function RegisterForm() {

    const navigate = useNavigate();
    const { setCurrentUser } = useUserContext();
    const { t } = useTranslation();

    const validationSchema = Yup.object().shape({
        firstName: Yup
        .string()
        .required(t('loginPage.requiredFieldValidation')),
        lastName: Yup
        .string()
        .required(t('loginPage.requiredFieldValidation')),
        email: Yup
        .string()
        .email(t('loginPage.emailValidation'))
        .required(t('loginPage.requiredFieldValidation')),
        password: Yup
        .string()
        .min(6, t('loginPage.passwordValidation'))
        .required(t('loginPage.requiredFieldValidation')),
        repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], t('loginPage.repeatPasswordValidation'))
        .required(t('loginPage.requiredFieldValidation')),
        address: Yup.string()
        .min(5, t('loginPage.addressValidation'))
        .required(t('loginPage.requiredFieldValidation')),
      });

    return <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '', 
          password: '',
          repeatPassword: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={ (values) => {
        // handle form submission
        setCurrentUser({email: values.email})
        navigate('/');
    }}
  >
    {({ errors, touched }) => (
        <Form>
            <div className="form-group">
            <label htmlFor="firstName">
              {t('loginPage.firstName')}
            </label>
            <Field name="firstName" type="text" className={`form-control ${errors.firstName && touched.firstName ? 'is-invalid' : ''}`} />
            {errors.firstName && touched.firstName ? <div className="invalid-feedback">{errors.firstName}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="lastName">
              {t('loginPage.lastName')}
            </label>
            <Field name="lastName" type="text" className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`} />
            {errors.lastName && touched.lastName ? <div className="invalid-feedback">{errors.lastName}</div> : null}
            </div>
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
            <div className="form-group">
            <label htmlFor="repeatPassword">
              {t('loginPage.repeatPassword')}
            </label>
            <Field name="repeatPassword" type="password" className={`form-control ${errors.repeatPassword && touched.password ? 'is-invalid' : ''}`} />
            {errors.repeatPassword && touched.repeatPassword ? <div className="invalid-feedback">{errors.repeatPassword}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="address">
              {t('loginPage.address')}
            </label>
            <Field name="address" type="text" className={`form-control ${errors.address && touched.address ? 'is-invalid' : ''}`} />
            {errors.address && touched.address ? <div className="invalid-feedback">{errors.address}</div> : null}
            </div>
            <div className="d-grid gap-2">
              <Button className="mt-3 text-white" type="submit" variant="primary">
              {t('loginPage.register')}
              </Button>
            </div>
        </Form>
    )}
  </Formik>
}

export default RegisterForm


  

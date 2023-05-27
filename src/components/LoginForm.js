import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { loginMutation } from '../graphql/user'
import { client } from '../network/client'
import { useMutation } from 'react-query'
import { saveUserToken } from '../utils/token'
import { queryClient } from '../providers/Providers'

function LoginForm() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { mutate: loginUser, data } = useMutation(
    variables => {
      return client.request(loginMutation, variables)
    },
    {
      onSuccess: response => {
        if (response?.login) {
          saveUserToken(response.login)
          client.setHeader('Authorization', `Bearer ${response.login}`)
          queryClient.refetchQueries('currentUser')
          navigate('/')
        }
      },
    },
  )

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('loginPage.emailValidation'))
      .required(t('loginPage.requiredFieldValidation')),
    password: Yup.string()
      .min(6, t('loginPage.passwordValidation'))
      .required(t('loginPage.requiredFieldValidation')),
  })

  const onSubmit = formValues => {
    loginUser(formValues)
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // handle form submission
        onSubmit(values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">{t('loginPage.email')}</label>
            <Field
              name="email"
              type="email"
              className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
            />
            {errors.email && touched.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('loginPage.password')}</label>
            <Field
              name="password"
              type="password"
              className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
            />
            {errors.password && touched.password ? (
              <div className="invalid-feedback">{errors.password}</div>
            ) : null}
          </div>
          <div className="d-grid gap-2">
            <Button className="mt-3 text-white" type="submit" variant="primary">
              {t('loginPage.login')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useUserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const navigate = useNavigate();
    const { setCurrentUser } = useUserContext();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      });

    return <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={ (values) => {
        // handle form submission
        setCurrentUser({email: values.email})
        navigate('/');
    }}
  >
    {({ errors, touched }) => (
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <Form>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
            {errors.email && touched.email ? <div className="invalid-feedback">{errors.email}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
            {errors.password && touched.password ? <div className="invalid-feedback">{errors.password}</div> : null}
            </div>
            <Button className="mt-3" type="submit" variant="primary">Submit</Button>
        </Form>
        </div>
    </div>
      
      
    )}
  </Formik>
}

export default LoginForm


  

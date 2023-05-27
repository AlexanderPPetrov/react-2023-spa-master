import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useTranslation } from 'react-i18next'
import brandLogo from '../assets/logo.jpg'
import { useState } from 'react'

import { useQuery } from 'react-query'
import { client } from '../network/client'
import { usersQuery } from '../graphql/user'

function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const { t } = useTranslation()

  const { data } = useQuery('users', () => {
    return client.request(usersQuery, {
      page: 1,
      limit: 10,
    })
  })

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">
                <img src={brandLogo} style={{ height: '60px' }} alt="ST 2023" />
              </h5>
              {isLoginForm && <LoginForm />}
              {!isLoginForm && <RegisterForm />}
              <div className="d-flex align-items-center justify-content-center mt-4">
                <span className="mx-1">
                  {t(isLoginForm ? 'loginPage.signUpText' : 'loginPage.loginText')}
                </span>
                <a onClick={() => setIsLoginForm(!isLoginForm)} href="#" className="mx-1 fw-bold">
                  {t(isLoginForm ? 'loginPage.signUpButton' : 'loginPage.login')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

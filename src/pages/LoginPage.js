import LoginForm from "../components/LoginForm"
import { useTranslation } from "react-i18next";
function LoginPage() {

    const { t } = useTranslation()

    return <div className="container">
    <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                    //TODO
                    </h5>
                    <LoginForm/>
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <span className="mx-1">
                            {t('loginPage.signUpText')}
                        </span>
                        <a href="#" className="mx-1">
                            {t('loginPage.signUpButton')}
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
}

export default LoginPage
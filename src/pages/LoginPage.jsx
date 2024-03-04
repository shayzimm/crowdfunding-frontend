import LoginForm from "../components/Login/LoginForm.jsx";
import NewLoginForm from "../components/Login/NewLoginForm.jsx";
import "../components/Login/LoginPage.css";

function LoginPage(){
   
    return (
<>
<section className="login">
<section className="form" >

<section className="project-details">
    <div className="form-page">
            <p className="text-category">Your scientific discovery awaits</p>
                </div>
</section>
           
            
            <div className="newProjectForm">
                <h3>Already have a profile? 
                    <span className="orange"><p>Sign in</p>.</span></h3>
        <LoginForm />
        <h3>Don't have have an account yet? 
            <span className="orange"><p>Sign up</p></span></h3>
        <NewLoginForm/>
        </div>
    </section>
    </section>
</>
)
}
export default LoginPage;
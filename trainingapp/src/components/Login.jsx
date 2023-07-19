import  "./Login.css"


function Login(props) {
    const {id, userName, isAutorized } = props;
    let authorization;
	if (isAutorized) {
		authorization = <p>Привет, {userName}!</p>;
	} else {
		authorization = <div className="login">
        <input className="login__input" type="text" placeholder="Login"/>
        <input className="login__input" type="text" placeholder="Password"/>
        <button className="login__button">Login</button>
        </div>;
	}


    return (
        <div className="login-container">
     {authorization}
    </div>
    );
}

  export default Login;

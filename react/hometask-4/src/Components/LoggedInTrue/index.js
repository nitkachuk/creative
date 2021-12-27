
import {Component} from "react";
import '../../login.scss';


class LogInFalse extends Component   {

    componentDidMount() {
        console.log( "Произошел вход в аккаунт" );
    }

    componentWillUnmount() {
        console.log( "Произошел выход из аккаунта" );
    }
    
    render() {

        return( 

            <div className="login-box" style={{ top: `${this.props.padd}px` }}>

                Добро пожаловать, <b style={{ color: '#ff0000' }} >xxx.RammsteinFan.xxx</b>
                <img src="images/logout_button.png" alt="LogoutClass" />

            </div> 

        );

    }

}


export default LogInFalse;
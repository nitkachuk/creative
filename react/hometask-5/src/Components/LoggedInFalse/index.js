
import {Component} from "react";
import '../../login.scss';


class LogInTrue extends Component   {

    render() {

        return( 

            <div className="login-box" style={{ top: `${this.props.padd}px` }} >

                Вы не авторизовались, <b>Гость</b>
                <img src="images/login_button.png" alt="LoginClass" />

            </div>

        );

    }

}


export default LogInTrue;
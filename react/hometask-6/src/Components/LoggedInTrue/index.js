
import {Component} from "react";
import '../../login.scss';


class LogInFalse extends Component   {

    componentDidMount() {

        // Запускаем таймер логаута (самоуничтожения компонента)
        
        this.timeout = this.timer();

    }

    timer = () => {

        setTimeout(
            () => this.props.sendFunction(),       // запускаем функцию в родительском компоненте
            2000
        );

    }

    componentWillUnmount() {

        clearTimeout( this.timeout );
        console.log( "Произошла очистка таймера" );

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
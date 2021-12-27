
import '../../login.scss';

function LogInFalse ( { padd } )   {

    return( 

        <div className="login-box" style={{ top: `${padd}px` }}>

            Добро пожаловать, <b style={{ color: '#ff0000' }} >xxx.RammsteinFan.xxx</b>
            <img src="images/logout_button.png" alt="LogoutClass" />

        </div>

    );

}

export default LogInFalse;
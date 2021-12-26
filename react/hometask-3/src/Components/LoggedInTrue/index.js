
import '../../login.scss';

function LogInTrue ( { padd } )   {

    return( 

        <div className="login-box" style={{ top: `${padd}px` }} >

            Вы не авторизовались, <b>Гость</b>
            <img src="images/login_button.png" alt="LoginClass" />

        </div>

    );

}

export default LogInTrue;
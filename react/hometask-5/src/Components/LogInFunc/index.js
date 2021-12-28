import { useState } from "react";
import '../../login.scss';
import LoggedInTrue from '../LoggedInTrue/';
import LoggedInFalse from '../LoggedInFalse/';

function LogInFunc (  )   {

    const [ logged, setLogged ] = useState( 0 );

    const toggleLogIn = () => {
        logged ? setLogged( 0 ) : setLogged( 1 );
        console.log( logged )
    }

    return( 

          <div onClick={ toggleLogIn }>

            
            {logged
                ? <LoggedInTrue padd={ 50 } />
                : <LoggedInFalse padd={ 50 } />
            }
            

          </div>

    );

}

export default LogInFunc;
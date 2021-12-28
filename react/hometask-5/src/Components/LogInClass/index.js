import {Component} from "react";
import '../../login.scss';
import LoggedInTrue from '../LoggedInTrue/';
import LoggedInFalse from '../LoggedInFalse/';

class LogInClass extends Component   {

    constructor(props) {

        super(props);

        this.state = {
            logged: false
        };     

    }

    
    // выход из аккаунта
    logOut = () => {
        this.setState( { logged: false } );
    }

    toggleLogIn = () => {
        this.setState( { logged: !this.state.logged } );
    }
    

    render() {

        
    
        return( 
    
              <div onClick={ this.toggleLogIn } >
    
                
                {this.state.logged
                    ? <LoggedInTrue padd={ 10 } sendFunction={ this.logOut } />
                    : <LoggedInFalse padd={ 10 } />
                }
                
    
              </div>
    
        );

    }

    

}

export default LogInClass;
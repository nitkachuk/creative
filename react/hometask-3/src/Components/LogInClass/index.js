import {Component} from "react";
import '../../login.scss';
import LoggedInTrue from '../LoggedInTrue/';
import LoggedInFalse from '../LoggedInFalse/';

class LogInClass extends Component   {

    state = {
        logged: false
    };

    toggleLogIn = () => {
        this.setState( { logged: !this.state.logged } );
        console.log( this.state.logged );
    }

    render() {

        
    
        return( 
    
              <div onClick={ this.toggleLogIn } >
    
                
                {this.state.logged
                    ? <LoggedInFalse padd={ 10 } />
                    : <LoggedInTrue padd={ 10 } />
                }
                
    
              </div>
    
        );

    }

    

}

export default LogInClass;
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

    componentDidUpdate() {
        if( this.state.logged )     this.timer() 
    }

    timer = () => {

        setTimeout(
            () =>  this.setState( { logged: false } ),
            3000
        );

    }

    toggleLogIn = () => {
        this.setState( { logged: !this.state.logged } );
    }
    

    render() {

        
    
        return( 
    
              <div onClick={ this.toggleLogIn } >
    
                
                {this.state.logged
                    ? <LoggedInTrue padd={ 10 } />
                    : <LoggedInFalse padd={ 10 } />
                }
                
    
              </div>
    
        );

    }

    

}

export default LogInClass;
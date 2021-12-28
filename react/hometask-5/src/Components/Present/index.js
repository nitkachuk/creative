import {Component} from "react";
import './style.scss';

class LogInClass extends Component   {


noBubbling = (e) => {

    console.log( "\n\nСработало нажатие на подарок - и ни единого разрыва... то есть, всплыва" );
    e.stopPropagation(); 

}

    render() {

        return( 
    
              <div>
                
                <img src="/images/present.jpg"  onClick={ this.noBubbling } alt="Present" />
                
              </div>
    
        );

    }

    

}

export default LogInClass;
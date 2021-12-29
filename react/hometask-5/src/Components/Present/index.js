import {Component} from "react";
import './style.scss';
import SecondTask from '../SecondTask/';

class Present extends Component   {

    constructor(props) {

        super(props);

        this.state = {
            clicked: false
        };  

    }


    noBubbling = (e) => {

        console.log( "\n\nСработало нажатие на подарок - и ни единого разрыва... то есть, всплыва" );
        e.stopPropagation(); 
        
        this.setState( { clicked: true } );

    }


    render() {

        return( 
    
              <div className="present-box">
                
                <img src="/images/present.jpg"  onClick={ this.noBubbling } alt="Present" />
                
                    
                    {
                        this.state.clicked  
                        ?  <SecondTask />
                        :  <div></div>
                    }

              </div>
    
        );

    }

    

}

export default Present;
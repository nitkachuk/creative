import {Component} from "react";
import './style.scss';
import Present from '../../Components/Present/';

class LogInClass extends Component   {

    constructor(props) {

        super(props);

        this.state = {
            present: 0,
        };     

    }

    submitForm = () => {

        this.setState( { present: !this.state.present } );

    }


    render() {

    
        return( 
    
              // убрал отслеживание клика
              <div >    
                
                <form 
                    className="forma" 
                    onSubmit={ (e) => { this.submitForm(); e.preventDefault(); } }
                    // убрал отслеживание клика
                >

                    <input type="submit" value="asd" ></input>

                    {
                        this.state.present 
                        ? <i>С наступающим! Теперь нажмите на подарок, чтобы посмотреть запрет всплытия в консоли</i>  
                        : <i>Чтобы получить подарок, нажмите Enter</i>
                    }

                    {
                        this.state.present  
                        ?  <Present />
                        :  <div></div>
                    }

                </form>
                
              </div>
    
        );

    }

    

}

export default LogInClass;
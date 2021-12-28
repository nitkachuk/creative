import {Component} from "react";
import Forma from '../Forma';

class FormsBox extends Component   {

    clickEnter = (e) => {

        if( e.keyCode == 13 )   document.forms[0].elements[0].click();    // эмулирую нажатие на submit, т.к. submit() вызывает дефолтныйсабмит с перезагрузкой

    }


    render() {

        // вешаю обработчик нажатий клавиш клавиатуры
        document.body.addEventListener( 'keydown', this.clickEnter );
    
        return( 
    
              <>
                
                <Forma />
                
              </>
    
        );

    }

    

}

export default FormsBox;
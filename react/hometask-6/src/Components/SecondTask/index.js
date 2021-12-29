import {Component} from "react";
import './style.scss';


class SecondTask extends Component   {

    constructor(props) {

        super(props);

        this.state = {
            txt :   "Я теперь контролируемый. Изменения можно посмотреть в консоли.\nЯ теперь контролируемый. Изменения можно посмотреть в консоли.\nЯ теперь контролируемый. Изменения можно посмотреть в консоли.\nЯ теперь контролируемый. Изменения можно посмотреть в консоли.\nЯ теперь контролируемый. Изменения можно посмотреть в консоли.\nЯ теперь контролируемый. Изменения можно посмотреть в консоли. "
        };     

    }


    componentDidUpdate() {
        console.log( "Вы изменили состояние <textarea>" );
    }


    totalControl = (e) => {

        this.setState( { txt: e.target.value } );

    }

    

    render() {


        return( 

              <div>
                
                    <div><i>Чудесно. Осталось только посмотреть в консоли наведение и скролл мыши</i></div>

                    <textarea 
                        className="overflow-box"
                        //onMouseEnter={ () => console.log('Сработало наведение') } 
                        //onScroll={ () => console.log('Сработал скролл') } 
                        value={ this.state.txt }
                        onChange={ this.totalControl }
                    />

              </div>

        );

    }

    

}

export default SecondTask;
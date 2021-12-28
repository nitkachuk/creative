import {Component} from "react";
import './style.scss';


class Artist extends Component   {

    constructor(props) {

        super(props);

        this.state = {
            instruments: [ "", "vocal", "solo", "rhytm", "fx", "bass", "drums" ],
            icon: 0
        };     

    }

    selectIcon = () => {
      this.state.icon == this.state.instruments.length - 1 ? this.setState( { icon: 1 } ) : this.setState( { icon: this.state.icon + 1 } );
      this.props.cardClick();
  }


    render() {


        return( 

            <div className="artist-box" onClick={ this.selectIcon }>

                <img src={ `images/artists/${ this.props.person.name }.jpg` } alt="Person" />

                <div> 
                    <h3> { this.props.person.name }  </h3> 
                    <h3> { this.props.person.surname }  </h3> 
                </div>

                <div className="role"> { this.props.role } </div>

                <img src={ 
                    this.state.icon ? `images/instruments/${ this.state.instruments[ this.state.icon ] }.png` : `images/instruments/holder.gif`  
                        } alt="Instrument" className="instrument" />

            </div>

        );

    }


}

export default Artist;
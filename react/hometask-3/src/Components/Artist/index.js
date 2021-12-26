import { useState } from "react";
import './style.scss';

function Artist ( { person, role, clicks, cardClick } )   {

  const instruments = [ "", "vocal", "solo", "rhytm", "fx", "bass", "drums" ];
  const [ icon, setIcon ] = useState( 0 );

  const selectIcon = () => {
      icon == instruments.length - 1 ? setIcon( 1 ) : setIcon( icon + 1 );
      cardClick();
  }


    return( 

          <div className="artist-box" onClick={ selectIcon }>

              <img src={ `images/artists/${ person.name }.jpg` } alt="Person" />

              <div> 
                  <h3> { person.name }  </h3> 
                  <h3> { person.surname }  </h3> 
              </div>

              <div className="role"> { role } </div>

              <img src={ 
                  icon ? `images/instruments/${ instruments[ icon ] }.png` : `images/instruments/holder.gif`  
                       } alt="Instrument" className="instrument" />

              

          </div>

    );

}

export default Artist;
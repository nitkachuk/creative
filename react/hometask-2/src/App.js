import { React, useState } from "react";
import './App.scss';


const Header = () =>  {

    return( 

      <header>
        
          <img src="/images/logo.gif" alt="Logo" className="logo" />

      </header>

    )

}



function Artist ( { person, role, clicks, cardClick } )   {

  const instruments = [ "", "vocal", "solo", "rhytm", "fx", "bass", "drums" ];
  const [ icon, setIcon ] = useState( 0 );

  const selectIcon = () => {
      icon == instruments.length - 1 ? setIcon( 1 ) : setIcon( icon + 1 );
      cardClick();
  }


    return( 

          <div className="component-box" onClick={ selectIcon }>

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



const Footer = () =>  {
  
    return( 

      <footer>
        
          Made by Nikolai

      </footer>

    );

}



function App() {

  const [ clicks, setClicks ] = useState( 0 );

  const handleArtistClick = () => {
    setClicks( clicks + 1 );
  }


  return (
    <div className="wrapper">
      
      <Header />

      <div className="counter-box"> Achtung! Sie haben { clicks } mal geklickt! </div>

        <div className="flex-box">

            <Artist 
                person={{ name: 'Till', surname: 'Lindemann' }} 
                role="vocal"
                cardClick = { handleArtistClick }
                counter = { clicks }
              />

            <Artist 
                person={{ name: 'Richard', surname: 'Kruspe' }}
                role="solo"
                cardClick = { handleArtistClick }
                counter = { clicks }
              />

            <Artist 
                person={{ name: 'Paul', surname: 'Landers' }}
                role="rhytm"
                cardClick = { handleArtistClick }
                counter = { clicks }
              />

            <Artist 
                person={{ name: 'Christian', surname: 'Lorenz' }}
                role="fx"
                cardClick = { handleArtistClick }
                counter = { clicks }
              />

            <Artist 
                person={{ name: 'Oliver', surname: 'Riedel' }}
                role="bass"
                cardClick = { handleArtistClick }
                counter = { clicks }
              />

            <Artist 
                person={{ name: 'Christoph', surname: 'Schneider' }}
                role="drumzzz"
                cardClick = { handleArtistClick }
                counter = { clicks }
              />

        </div>

      <Footer />

    </div>
  );


}

export default App;

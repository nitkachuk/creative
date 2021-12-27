import { React, useState } from "react";
import './App.scss';
import LogInClass from './/Components/LogInClass/';
import LogInFunc from './/Components/LogInFunc/';
import Header from './/Components/Header/';
import Artist from './/Components/Artist/';
import Footer from './/Components/Footer/';


function App() {

  const [ clicks, setClicks ] = useState( 0 );

  const handleArtistClick = () => {
    setClicks( clicks + 1 );
  }


  return (
    <div className="wrapper">

      <LogInClass />
      <LogInFunc />
      
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

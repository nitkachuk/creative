import { React, useState } from "react";
import './App.scss';
import LogInClass from './Components/LogInClass/';
import LogInFunc from './Components/LogInFunc/';
import Header from './Components/Header/';
import Artist from './Components/Artist/';
import FormsBox from './Components/FormsBox/';
import Footer from './Components/Footer/';


function App() {

  const [ clicks, setClicks ] = useState( 0 );

  const handleArtistClick = () => {
    setClicks( clicks + 1 );
  }


  const rammstein = [ 
    
    {
      id : 1,
      person: { name: "Till", surname: "Lindemann" },
      role : "vocal",
    } ,

    {
      id : 2,
      person: { name: "Richard", surname: "Kruspe" },
      role : "solo",
    } ,

    {
      id : 3,
      person: { name: "Paul", surname: "Landers" },
      role : "rhytm",
    } ,

    {
      id : 4,
      person: { name: "Christian", surname: "Lorenz" },
      role : "fx",
    } ,

    {
      id : 5,
      person: { name: "Oliver", surname: "Riedel" },
      role : "bass",
    } ,

    {
      id : 6,
      person: { name: "Christoph", surname: "Schneider" },
      role : "drumzzz",
    }

  ];


  return (
    <div className="wrapper">

      <LogInClass />
      <LogInFunc />
      
      <Header />

      <div className="counter-box"> Achtung! Sie haben { clicks } mal geklickt! </div>

        <div className="flex-box">

            { rammstein
              .map( ( man ) => (

              <Artist 
                key = { man.id }
                person = { man.person }
                cardClick = { handleArtistClick }
              />

            )) }
			

        </div>


        <FormsBox/>


      <Footer />

    </div>
  );


}

export default App;

import React from "react";
import './App.scss';


class Header extends React.Component  {
  
  render()   {

    return( 

      <header>
        
          <img src="/images/logo.gif" alt="Logo" className="logo" />

      </header>

    );

  }

}



function Compo ( props )   {

  const [ counter, setCounter ] = React.useState( 0 );

    return( 

          <div className="component-box" onClick={ () => setCounter( counter + 1 ) } >

              <div> Compontent "{ props.name }" </div>
              <div> Clicked { counter } times </div>

          </div>

    );

}


class Footer extends React.Component  {
  
  render()   {

    return( 

      <footer>
        
          Made by Nikolai

      </footer>

    );

  }

}



function App() {

  return (
    <div className="wrapper">
      
      <Header />

        <Compo name="Bob" />
        <Compo name="John" />
        <Compo name="Peter" />

      <Footer />

    </div>
  );


}

export default App;

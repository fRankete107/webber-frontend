import '../App.css';
import Main from "../componentes/Main";
import Subheader from "../componentes/Subheader";
import Nav from "../componentes/Nav";

function Home() {
  return (
    <>
    <div className="App">        
        <Nav />
        <div className='contenedor'>
          <div className='header'>
            <div className='img'></div>
            <div className='obj'>
              <header>
                WEBBER
              </header>
              <Subheader />
            </div>
          </div>
          <Main />
        </div>
        
      </div></>
  );
}

export default Home;

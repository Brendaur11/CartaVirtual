import {QRCodeSVG} from 'qrcode.react';
import {isMobile, isTablet} from 'react-device-detect';
import Menu from './components/Menu';
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from 'react';

function App() {
  // if (isMobile || isTablet) {
  const [showMenu, setShowMenu] = useState(false);

  if(showMenu){
    return <Menu/>;
  }

    return (
      <main
        id="PageInicio"
        className="relative flex flex-col items-center justify-center text-center text-gray-100 h-screen w-screen bg-green-800"
      >
        <div className="absolute text-[25rem]">
          <i className="bx bx-chef-hat" style={{ color: "#65724144" }}></i>
        </div>
        
        <div className='absolute'>
          <h1 className="text-4xl font-semibold">PESTO SALUMERIA</h1>

          <div className="mt-6 p-2 backdrop-blur-sm bg-lime-950/40 rounded-md">
            <h2 className="text-xl">Ubicación</h2>
            <p>Santa Fé</p>
          </div>

          <div className="mt-6 p-2 backdrop-blur-sm bg-lime-950/40 rounded-md">
            <h2 className="text-xl">Horario</h2>
            <p>Martes a Domingo</p>
            <p>Mañana 8.30Hs - Tarde 16.30Hs</p>
          </div>

          <div className="mt-6 flex justify-center items-center gap-x-4">
            <a
              href="https://wa.me/549XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-2xl px-2 py-2 rounded-md hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>

            <button
              className="flex justify-center items-center bg-gray-300 font-normal text-lime-950 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
              onClick={() => setShowMenu(true)}
            >
              Carta Salón 
              {/* <i className='bx  bx-book-content text-xl ml-2'  style={{color:"#3a441f"}}></i>  */}
            </button>
          </div>

        </div>
      </main>
    );
  // }else{

  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen text-center p-4" id='pantallaDesk'>
  //       <h1 className='text-4xl font-normal mb-2 text-gray-100'>Bienvenido a PESTO</h1>
  //       <h2 className="text-2xl font-normal mb-6 text-gray-100">
  //         Escanea este QR para abrir la app en tu móvil
  //       </h2>
  //       <QRCodeSVG value="https://brendaur11.github.io/CartaVirtual/" size={200} />
  //     </div>
  //   );
  // }
  
}

export default App

import {QRCodeSVG} from 'qrcode.react';
import {isMobile, isTablet} from 'react-device-detect';
import Menu from './components/Menu';

function App() {
  if (isMobile || isTablet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Menu/>
      </div>
    );
  }else{

    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4" id='pantallaDesk'>
        <h1 className='text-4xl font-normal mb-2 text-gray-100'>Bienvenido a PESTO</h1>
        <h2 className="text-2xl font-normal mb-6 text-gray-100">
          Escanea este QR para abrir la app en tu móvil
        </h2>
        <QRCodeSVG value="https://brendaur11.github.io/CartaVirtual/" size={200} />
      </div>
    );
  }
  
}

export default App

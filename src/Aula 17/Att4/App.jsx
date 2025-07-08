import {useState} from 'react';
import Pagina from './Pagina'
import { TemaCOntext } from './TemaContext';

function App() {
    const [tema, setTema] = useState('claro');

    function alternarTema() {
        setTema(tema === 'claro' ? 'escuro' : 'claro');
    }

    return (
        <TemaCOntext.Provider value={{tema, alternarTema}}>
            <Pagina />
        </TemaCOntext.Provider>
    );
}

export default App;
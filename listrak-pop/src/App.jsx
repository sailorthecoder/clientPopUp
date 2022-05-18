import React, { useState } from 'react';
import './App.css';
import PopUpModal from './components/PopUpModal.jsx';
import ConfirmationModal from './components/ConfirmationModal.jsx';


function App() {
  const [page, setPage] = useState(false);
  return (
    <div>
      <h1>
        Listrak Pop-Up
      </h1>
      <div>
        {page ? <ConfirmationModal page={page} setPage={setPage}/> : <PopUpModal page={page} setPage={setPage}/>}
      </div>
    </div>
  )
}

export default App;
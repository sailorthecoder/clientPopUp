import React, { useState } from 'react';
import PopUp from './components/PopUp.jsx';
import ConfirmationPage from './components/ConfirmationPage.jsx';


function App() {
  const [page, setPage] = useState(false);
  return (
    <div>
      <h1>
        Listrak Pop-Up
      </h1>
      <div>
      {page ? <ConfirmationPage/> : <PopUp page={page} setPage={setPage}/>}
      </div>
    </div>
  )
}

export default App;
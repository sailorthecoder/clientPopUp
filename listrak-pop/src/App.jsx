import './App.css';
import PopUp from './components/PopUp.jsx';
import ConfirmationPage from './components/ConfirmationPage.jsx';


function App() {
  return (
    <div>
      <h1>
        Listrak Pop-Up
      </h1>
      <div>
        <PopUp/>
      </div>
      <div>
        <ConfirmationPage/>
      </div>
    </div>
  )
}

export default App;
import './App.css';
import Accordian from './components/Accordian';
import LoginSignup from './components/LoginSignup/LoginSignup';

function App() {
  return (
    <div className="App">
      {/* LoginSignup Component */}
      <LoginSignup/>
      {/* Accordian Component */}
      <Accordian/>
    </div>
  );
}

export default App;

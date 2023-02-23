
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Container/Dashboard/Dashboard';





function App() {
  return (
    <div className="App">
      {/* <h1 id="header"> Group two online banking system</h1> */}
     <BrowserRouter>
      <Dashboard/>
     </BrowserRouter>
    </div>

   );
}

export default App;

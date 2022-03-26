import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App" id='home'>
      <Header/>
      <Shop/>
    </div>
  );
}

export default App;

import './App.css';
import HomeComp from './Components/HomeComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Secondpage from './Components/Secondpage';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <HomeComp/>
      <Secondpage/>
      <Footer/>

    </div>
  );
}

export default App;

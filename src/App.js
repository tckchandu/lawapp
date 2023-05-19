
import Header from './Components/Header';
import Home from './Components/Home';
import Sidenav from './Components/Sidenav';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
    <Header />
    <div className="container-fluid">
<div className="row">
    <Sidenav/>
    <Home/>
    </div>
    </div>

<Footer/>

    </div>
  );
}

export default App;

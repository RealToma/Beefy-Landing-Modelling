import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Multichain from './Components/Multichain';
import Beefy from './Components/Beefy';
import Featured from './Components/Featured';
import Ecosystem from './Components/Ecosystem';
import Token from './Components/Token';
import News from "../src/Components/News"
import Footer from "../src/Components/Footer"

function App() {
  return (
    <div className="App">
      <div id="___gatsby">
        <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
          <div className="css-jk9cq3 eyajzuv1">
            <Header />
            <div className="css-0 eyajzuv0">
              <Multichain />
              <Beefy />
              <Featured />
              <Ecosystem />
              <Token />
              <News />
            </div>
            <Footer />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default App;

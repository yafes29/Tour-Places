import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./scss/App.scss";
import data from "./helper/data"




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card data={data} />
    </div>
  );
}

export default App;

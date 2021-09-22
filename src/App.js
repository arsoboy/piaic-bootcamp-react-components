import World from './components/world';
import './App.css';

function App() {

  const world = {
    continents: ["ASIA", "AFRICA", "AUSTRALIA", "EUROPE", "NORTH AMERICA", "SOUTH AMERICA", "RUSSIA"],
    regions: [
      {
        name: "Western Europe", 
        subregions: ["Belgium", "France", "United Kingdom","European Network"]
      },
      {
        name: "Central and Eastern Europe", 
        subregions: ["Commonwealth of Independent States (CIS)", "South-East Europe", "Poland","Turkey"]
      },
      {
        name: "Asia", 
        subregions: ["Central Asia", "South-East Asia", "Greater China", "India", "Pakistan", "South Asia"]
      },
      {
        name: "Africa", 
        subregions: ["Algeria", "Morocco", "Tunisia"]
      },
      {
        name: "Middle East", 
        subregions: ["North Africa", "Gulf countries", "Middle East", "Mediterranean"]
      },
      {
        name: "Americas", 
        subregions: ["Latin America & Caribbean", "Canada", "Etats-Unis"]
      }
    ]
  };

  return (
    <div className="App">
      <h1 style={{textAlign:"center",textDecoration:"underline"}}>
        REACT 
        <br /><em style={{fontSize:"70%"}}>COMPONENTS AND PROPS</em>
      </h1>
      <World data_world={world} />
    </div>
  );
}

export default App;

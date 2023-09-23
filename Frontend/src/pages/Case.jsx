// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const cpuCases = [
  {
    id: 1,
    name: "CoolCase 9000",
    brand: "CoolTech",
    price: 129.99,
    imageUrl: "case1.jpg",
    description: "A high-quality CPU case with excellent cooling options.",
  },
  {
    id: 2,
    name: "GamerBox X",
    brand: "GameMaster",
    price: 149.99,
    imageUrl: "case2.jpg",
    description: "Designed for gamers with RGB lighting and advanced airflow.",
  },
  {
    id: 3,
    name: "ProCase Ultra",
    brand: "ProTech",
    price: 179.99,
    imageUrl: "case3.jpg",
    description: "A professional-grade CPU case with ample space for customization.",
  },
  {
    id: 4,
    name: "SlimBox S",
    brand: "SlimTech",
    price: 99.99,
    imageUrl: "case4.jpg",
    description: "A compact and sleek CPU case for space-saving builds.",
  },
  // Add more CPU cases as needed
];

function CPUCaseList() {
  return (
    <div>
      <h2>CPU Cases</h2>
      {cpuCases.map((cpuCase) => (
        <div key={cpuCase.id} className="cpu-case">
          <img src={cpuCase.imageUrl} alt={cpuCase.name} />
          <h3>{cpuCase.name}</h3>
          <p>Brand: {cpuCase.brand}</p>
          <p>Price: ${cpuCase.price}</p>
          <p>{cpuCase.description}</p>
          <Link to={`/cpu-cases/${cpuCase.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

function CPUCaseDetails({ match }) {
  const cpuCase = cpuCases.find((c) => c.id === parseInt(match.params.id));

  if (!cpuCase) {
    return <div>CPU Case not found.</div>;
  }

  return (
    <div>
      <h2>{cpuCase.name} Details</h2>
      <img src={cpuCase.imageUrl} alt={cpuCase.name} />
      <p>Brand: {cpuCase.brand}</p>
      <p>Price: ${cpuCase.price}</p>
      <p>Description: {cpuCase.description}</p>
      <Link to="/cpu-cases">Back to CPU Cases</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>High-Spec PC Builder</h1>
        </header>
        <main>
          <Switch>
            <Route path="/cpu-cases/:id" component={CPUCaseDetails} />
            <Route path="/cpu-cases" component={CPUCaseList} />
            <Route path="/" exact>
              <h2>Welcome to our High-Spec PC Builder</h2>
              <p>We offer a wide range of CPU cases for your custom PC needs.</p>
            </Route>
          </Switch>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Your E-commerce Website</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

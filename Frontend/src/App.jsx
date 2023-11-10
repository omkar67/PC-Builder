import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './redux/store'; // Import your Redux store
import routes from './routes/routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}> {/* Wrap your app with Provider */}
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;

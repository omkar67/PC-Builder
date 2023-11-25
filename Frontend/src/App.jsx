import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './redux/store'; // Import your Redux store
import routes from './routes/routes';
import Navbar from './components/Navbar';

import { GamesProvider } from './context/Filter';

function App() {
  return (
    <>
    <GamesProvider>
      <Provider store={store}> {/* Wrap your app with Provider */}
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
         
        </Router>
      </Provider>
      </GamesProvider>
    </>
  );
}

export default App;

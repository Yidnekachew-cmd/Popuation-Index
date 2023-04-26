import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={(
                <Container fluid className="App">
                  <Home />
                  {' '}
                </Container>
            )}
            />
            <Route
              path="/:topLevelDomain"
              element={(
                <Container fluid className="App">
                  <Details />
                </Container>
            )}
            />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

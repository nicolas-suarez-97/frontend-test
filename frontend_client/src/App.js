import './App.scss';
import Header from './components/header/header';
import SearchResult from './pages/search-result/search-result';
import ProductDetail from './pages/product-detail/product-detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/items" component={SearchResult} />
          <Route exact path="/items/:id" component={ProductDetail} />
        </Switch>
      </Provider>
    </Router>

  );
}

export default App;

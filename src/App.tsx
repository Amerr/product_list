import './App.css';
import AppHeader from './components/AppHeader';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div>
        <ProductContainer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import AppHeader from './components/AppHeader';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div>
        <div>Cateogry</div>
        <div>
          <ProductContainer />
        </div>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;

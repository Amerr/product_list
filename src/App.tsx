import './App.css';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <header>Header</header>
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

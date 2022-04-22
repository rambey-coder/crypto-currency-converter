import './App.css';
import NewsFeed from './components/NewsFeed'
import CurrencyConverter from './components/CurrencyConverter'
import ExchangeRate from './components/ExchangeRate';

function App() {
  return (
    <div className="App">
      <NewsFeed />
      <CurrencyConverter />
      <ExchangeRate />
    </div>
  );
}

export default App;

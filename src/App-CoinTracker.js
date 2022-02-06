import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/tickers")
    .then(reponse => Response.json())
    .then(jason => {
      setCoins(jason);
      setLoading(false);
    });
  }, []);
  
  return (
  <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading? <strong>Loading...</strong> : 
        (<select>
          <option>
            {coins.map((coin) => <li>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>)}
          </option>
        </select>
        ) }


  </div> 
  );
}

export default App;
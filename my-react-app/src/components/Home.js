// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Section.css';

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        // Use the environment variable here
        const response = await axios.get('http://api.coinlayer.com/live', {
          params: {
            access_key: 'ae18d4e25244661192fa44f0baa8c537',
          },
        });

        if (response.data.success) {
          const rates = response.data.rates;
          const cryptoArray = Object.entries(rates).map(([symbol, price]) => ({
            symbol,
            price,
          }));
          setCryptoData(cryptoArray);
          setLoading(false);
        } else {
          setError('Error fetching data from the API');
          setLoading(false);
        }
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchCryptoPrices();
  }, []);

  return (
    <div id="home" className="section">
      <h2>Home</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="crypto-price-container">
          <div className="crypto-column">
            <h3>Crypto</h3>
            <ul>
              {cryptoData.map((crypto, index) => (
                <li key={index}>{crypto.symbol}</li>
              ))}
            </ul>
          </div>
          <div className="price-column">
            <h3>Price</h3>
            <ul>
              {cryptoData.map((crypto, index) => (
                <li key={index}>${crypto.price.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

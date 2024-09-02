import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PriceDisplay = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        setPrice(response.data.bitcoin.usd);
      } catch (error) {
        console.error('Error fetching the price:', error);
      }
    };

    fetchPrice();

    // Optional: Set up an interval to refresh the price every 10 seconds
    const interval = setInterval(fetchPrice, 10000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h2>Bitcoin Price: ${price ? price : 'Loading...'}</h2>
    </div>
  );
};

export default PriceDisplay;

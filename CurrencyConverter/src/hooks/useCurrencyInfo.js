import { useState, useEffect } from "react";

import React from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/5fc0b88f5cb7214b97a2d63d/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates);
      })
      .catch((err) => console.log("error"+err));
    
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

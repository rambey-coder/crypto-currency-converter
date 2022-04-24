import React from 'react'

const ExchangeRate = ({ exchangeRate, primaryCurrency, secondaryCurrency }) => {
  return (
    <div className='exchange-rate'>
      <h2>Exchange Rate</h2>
      <h1>{exchangeRate}</h1>
      <p>{primaryCurrency} to {secondaryCurrency}</p>
    </div>
  )
}

export default ExchangeRate
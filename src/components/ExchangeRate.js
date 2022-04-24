import React from 'react'

const ExchangeRate = ({ exchangeRate, primaryCurrency, secondaryCurrency }) => {
  return (
    <div className='exchange-rate'>
      <h2>Exchange Rate</h2>
      <h1>{Math.round(exchangeRate)}</h1> 
      <span>{secondaryCurrency}</span>
      <p>{primaryCurrency} to {secondaryCurrency}</p>
    </div>
  )
}

export default ExchangeRate
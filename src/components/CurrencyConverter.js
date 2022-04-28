import React, { useState } from 'react'
import ExchangeRate from './ExchangeRate'
import './CurrencyConverter.css'
import axios from 'axios';

const CurrencyConverter = () => {

  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];

  const [primaryCurrency, setPrimaryCurrency] = useState('BTC')

  const [secondaryCurrency, setSecondaryCurrency] = useState('BTC')

  const [amountRate, setAmountRate] = useState('')

  const [exchangeRate, setExchangeRate] = useState('');

  const [resultRate, setResultRate] = useState('')
  
  // console.log(amountRate);
  
  const handleConvert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: primaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurrency},
      headers: {
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        'X-RapidAPI-Key': 'fc8383d259mshd82740747cffbd5p1ec785jsn2bb3ea71d923'
      }
    };
    
    axios.request(options)
    .then(res => {
      setExchangeRate(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setResultRate(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amountRate);
    })
    .catch(err => alert(err.data));
  }

  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className='currency-converter'>
      <div className='input-box'>
        <h2>Currency Converter</h2>
        <p>Today, {date}</p>
        <div className='general'>
          <ExchangeRate 
          exchangeRate={exchangeRate}
          secondaryCurrency={secondaryCurrency}
          primaryCurrency={primaryCurrency}
        />
        <div className='converter-container'>
            <div className='converter-data'>
              <p>From {primaryCurrency}</p>
              <div className='data-container'>
                <input 
                  type='number'
                  name='currency-amount-1'
                  value={amountRate}
                  onChange={e => setAmountRate(e.target.value)}
                />

                <select
                value={primaryCurrency}
                name='currency-option-1'
                className='currency-options'
                onChange={e => setPrimaryCurrency(e.target.value)}
                >
                  {
                    currencies
                    .map((currency, index) => (<option key={index}>{currency}</option>))
                  } 
                </select>
              </div>
            </div>

            <div className='converter-data'>
              <p>To {secondaryCurrency}</p>
              <div className='data-container'>
                <input 
                  name='currency-amount-2'
                  value={resultRate}
                  disabled={true}
                />

                <select
                value={secondaryCurrency}
                name='currency-option-2'
                className='currency-options'
                onChange={e => setSecondaryCurrency(e.target.value)}
                >
                  {
                    currencies
                    .map((currency, index) => (<option key={index}>{currency}</option>))
                  }
                </select>
              </div>
            </div>
            </div>
            <button className='convert-btn' onClick={handleConvert}>Convert</button>
        </div>
      </div>
      
    </div>
  )
}

export default CurrencyConverter
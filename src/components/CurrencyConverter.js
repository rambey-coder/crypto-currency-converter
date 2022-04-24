import React, { useState } from 'react'
import ExchangeRate from './ExchangeRate'
import axios from 'axios';

const CurrencyConverter = () => {

  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];

  const [primaryCurrency, setPrimaryCurrency] = useState('BTC')

  const [secondaryCurrency, setSecondaryCurrency] = useState('BTC')

  const [amountRate, setAmountRate] = useState(1)

  const [exchangeRate, setExchangeRate] = useState(0);

  const [resultRate, setResultRate] = useState(0)
  
  console.log(amountRate);
  
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
      console.log(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setExchangeRate(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setResultRate(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amountRate);
    })
    .catch(err => console.log(err.data));
  }
  console.log(resultRate);

  return (
    <div className='currency-converter'>
      <div className='input-box'>
        <h2>CurrencyConverter</h2>
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input 
                  type='number'
                  name='currency-amount-1'
                  value={amountRate}
                  onChange={e => setAmountRate(e.target.value)}
                />
              </td>
              <td>
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
              </td>
            </tr>

            <tr>
              <td>Secondary Currency</td>
              <td>
                <input 
                  name='currency-amount-2'
                  value={resultRate}
                  disabled={true}
                />
              </td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>
        <button className='convert-btn' onClick={handleConvert}>Convert</button>
      </div>
      <ExchangeRate 
        exchangeRate={exchangeRate}
        secondaryCurrency={secondaryCurrency}
        primaryCurrency={primaryCurrency}
      />
    </div>
  )
}

export default CurrencyConverter
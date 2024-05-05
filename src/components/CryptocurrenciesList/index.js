import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyDetails: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.getCryptoCurrencylist()
  }

  getCryptoCurrencylist = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
      currencyLogo: eachCurrency.currency_logo,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
    }))

    this.setState({
      currencyDetails: formattedData,
      isLoading: false,
    })
  }

  currencyList = () => {
    const {currencyDetails} = this.state
    return (
      <div className="cryptocurrency-list-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptocurrency-img"
          alt="cryptocurrency"
        />

        <div className="table-container">
          <ul className="crypto-currency-table">
            <li className="table-header">
              <p className="table-header-cell-1">Coin Type</p>
              <p className="table-header-cell">USD</p>
              <p className="table-header-cell">EURO</p>
            </li>
            {currencyDetails.map(eachCurrency => (
              <CryptocurrencyItem
                currencyDetails={eachCurrency}
                key={eachCurrency.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.currencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList

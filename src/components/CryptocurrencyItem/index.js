import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = currencyDetails
  return (
    <li className="table-header">
      <div className="logo-container">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem

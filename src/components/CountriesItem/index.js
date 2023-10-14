import './index.css'

const CountriesItem = props => {
  const {countryDetails, onClickVisited, buttonStatus} = props
  const buttonClick = buttonStatus ? 'disabled' : ''

  const onClickVisit = () => {
    onClickVisited(countryDetails)
  }

  return (
    <li className="country-item">
      <div className="country-item-content">
        <p className="country-name">{countryDetails.name}</p>
        {buttonStatus ? (
          <p className="is-visited">Visited</p>
        ) : (
          <button
            disabled={buttonClick}
            onClick={onClickVisit}
            className="visit-button"
            type="button"
          >
            Visit
          </button>
        )}
      </div>
      <hr className="hr-line" />
    </li>
  )
}
export default CountriesItem

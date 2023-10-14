import './index.css'

const VisitedCountry = props => {
  const {VisitedCountryDetails, removeVisitedItem} = props
  const {name, imageUrl, id} = VisitedCountryDetails
  const onClickRemove = () => {
    removeVisitedItem(id)
  }
  return (
    <li className="list-item">
      <img src={imageUrl} alt="thumbnail" className="visited-country-image" />
      <div className="name-button-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountry

import {Component} from 'react'
import CountriesItem from '../CountriesItem'
import VisitedCountry from '../VisitedCountry'
import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountries extends Component {
  state = {
    countriesList: initialCountriesList,
    activeVisit: initialCountriesList[0].isVisited,
  }

  getVisitedList = () => {
    const {countriesList, activeVisit} = this.state
    const visitedList = countriesList.filter(
      each => each.isVisited !== activeVisit,
    )
    return visitedList
  }

  onClickVisited = country => {
    const {countriesList} = this.state
    const countryObject = countriesList.find(each => each.id === country.id)
    if (countryObject) {
      this.setState(prevState => ({
        countriesList: prevState.countriesList.map(eachItem => {
          if (eachItem.id === countryObject.id) {
            const visitStatus = !eachItem.isVisited
            return {...eachItem, isVisited: visitStatus}
          }
          return eachItem
        }),
      }))
    }
  }

  removeVisitedItem = id => {
    const {countriesList} = this.state
    const countryObject = countriesList.find(each => each.id === id)
    if (countryObject) {
      this.setState(prevState => ({
        countriesList: prevState.countriesList.map(eachItem => {
          if (eachItem.id === countryObject.id) {
            const visitStatus = !eachItem.isVisited
            return {...eachItem, isVisited: visitStatus}
          }
          return eachItem
        }),
      }))
    }
  }

  render() {
    const {countriesList} = this.state
    const visitedList = this.getVisitedList()
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="countries-text">Countries</h1>
          <ul className="country-list">
            {countriesList.map(each => (
              <CountriesItem
                key={each.id}
                countryDetails={each}
                onClickVisited={this.onClickVisited}
                buttonStatus={each.isVisited}
              />
            ))}
          </ul>
          <h1 className="countries-text">Visited Countries</h1>
          <div className="visited-countries-container">
            {visitedList.length === 0 ? (
              <p className="no-visit-message">No Countries Visited Yet!</p>
            ) : (
              <ul className="visited-country-list">
                {visitedList.map(eachCountry => (
                  <VisitedCountry
                    key={eachCountry.id}
                    VisitedCountryDetails={eachCountry}
                    removeVisitedItem={this.removeVisitedItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default VisitCountries

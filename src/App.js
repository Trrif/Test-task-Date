// React
import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { toggleDateVisibility, clearDateVisibility } from './actions/uiActions'

// Css
import './App.css'

class App extends Component {
  formatDate(date) {
    return date < 10 
    ? '0' + date
    : date 
  }

  render() {
    const { date, toggleDateVisibility, clearDateVisibility } = this.props
    const { formatDate } = this
    return (
      <div className='Container'>
        <div className='Container row'>
          <div className={`Button ${date.day && 'toggled'}`} onClick={() => toggleDateVisibility('day')}>
            Day
          </div>
          <div className={`Button ${date.month && 'toggled'}`} onClick={() => toggleDateVisibility('month')}>
            Month
          </div>
          <div className={`Button ${date.year && 'toggled'}`} onClick={() => toggleDateVisibility('year')}>
            Year
          </div>
        </div>
        <div className='Container row'>
          <div className={`DateView ${date.day && 'visible'}`}>
            {formatDate(date.fullDate.getDate())}
          </div>
          <div className={`DateView ${date.month && 'visible'}`}>
            {formatDate(date.fullDate.getMonth() + 1)}
          </div>
          <div className={`DateView ${date.year && 'visible'}`}>
            {date.fullDate.getFullYear()}
          </div>
        </div>
        <div className='Container row'>
          <div className='Button clear' onClick={clearDateVisibility}>
            Clear
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    date: state.date
  }
}
const AppConnect = connect(mapStateToProps, { toggleDateVisibility, clearDateVisibility })(App)
export default AppConnect

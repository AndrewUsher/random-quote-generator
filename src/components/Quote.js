import React from 'react'
import PropTypes from 'prop-types'
import '../styles/_quote.styl'

const Quote = ({ quote, tweetURL, changeQuote }) => (
  <div className="quote">
    <p>{quote}</p>
    <div className="buttons">
      <button onClick={changeQuote}>Get New Quote</button>
      <a href={tweetURL} target="_blank">
        <button>Share to Twitter</button>
      </a>
    </div>
  </div>
)

Quote.propTypes = {
  quote: PropTypes.string,
  tweetURL: PropTypes.string.isRequired,
  changeQuote: PropTypes.func.isRequired
}

export default Quote

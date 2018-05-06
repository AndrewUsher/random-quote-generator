import React from 'react'
import '../styles/_quote.styl'

const Quote = ({ quote, author, changeQuote, sendTweet }) => (
  <div className="quote">
    <p>{quote}</p>
    <p>{author}</p>
    <div className="buttons">
      <button onClick={changeQuote}>Get New Quote</button>
      <button onClick={sendTweet}>Share to Twitter</button>
    </div>
  </div>
)

export default Quote

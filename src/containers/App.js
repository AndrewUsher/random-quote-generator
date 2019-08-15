import React, { Component } from 'react'
import Header from '../components/Header'
import Quote from '../components/Quote'
import Footer from '../components/Footer'
import '../styles/index.styl'
class App extends Component {
  constructor (props) {
    super(props)
    // Initial state
    this.state = {
      quote: '',
      author: '',
      tweetURL: '#'
    }
    // Bind class methods
    this.fetchQuote = this.fetchQuote.bind(this)
    this.sendTweet = this.sendTweet.bind(this)
  }

  componentDidMount () {
    this.fetchQuote()
  }

  fetchQuote () {
    fetch('https://api.kanye.rest', { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        const { quote } = data
        this.sendTweet(quote)
        this.setState({ quote })
      })
  }

  sendTweet (quote) {
    const url = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
      quote
    )}"`
    this.setState({ tweetURL: url })
  }
  render () {
    const { quote, tweetURL } = this.state
    return (
      <div>
        <Header />
        <Quote quote={quote} tweetURL={tweetURL} changeQuote={this.fetchQuote} sendTweet={this.sendTweet} />
        <Footer />
      </div>
    )
  }
}

export default App

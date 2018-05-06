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
      author: ''
    }
    // Bind class methods
    this.fetchQuote = this.fetchQuote.bind(this)
    this.sendTweet = this.sendTweet.bind(this)
  }

  componentDidMount () {
    this.fetchQuote()
  }

  fetchQuote () {
    fetch('https://talaikis.com/api/quotes/random/', { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        const { quote, author } = data

        this.setState({ quote, author })
      })
  }

  sendTweet () {
    console.log('send tweet')
  }
  render () {
    const { quote, author } = this.state
    return (
      <div>
        <Header />
        <Quote quote={quote} author={author} changeQuote={this.fetchQuote} sendTweet={this.sendTweet} />
        <Footer />
      </div>
    )
  }
}

export default App

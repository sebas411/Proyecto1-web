import React from 'react'
import ReactDOM from 'react-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import './styles.css'

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

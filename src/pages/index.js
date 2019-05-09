import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return(
        <div>
            <Header />
            <h1>Hello.</h1>
            <h2>This is gatsby bootcamp.</h2>
            <Footer />
        </div>
    )
}

export default IndexPage
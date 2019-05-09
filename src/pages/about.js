import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>Bio will show up here...</p>
            <p>Link to <Link to="/contact">Contact page</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage
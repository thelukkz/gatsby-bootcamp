import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>Contact details will show up here...</p>
            <p>External link: <a href="https://www.google.com" target="_blank">Google.com</a></p>
            <Footer />
        </div>
    )
}

export default ContactPage
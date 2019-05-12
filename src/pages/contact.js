import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>Contact details will show up here...</p>
            <p>External link: <a href="https://www.google.com" target="_blank">Google.com</a></p>
        </Layout>
    )
}

export default ContactPage
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Bio will show up here...</p>
            <p>Link to <Link to="/contact">Contact page</Link></p>
        </Layout>
    )
}

export default AboutPage
module.exports = {
    siteMetadata: {
        title: 'lqs-gatsby-bootcamp!',
        author: 'Łukasz Bednarek'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }
    ]
}
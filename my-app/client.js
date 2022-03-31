const sanityClient = require('@sanity/client')
export const client = sanityClient({
    projectId: "fbc4lrve",
    dataset: "production",
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
})
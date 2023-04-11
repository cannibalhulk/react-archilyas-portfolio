import client from '@sanity/client'

export default client({
    projectId: 'wt0rn5to',
    dataset: 'production',
    useCdn: true
})

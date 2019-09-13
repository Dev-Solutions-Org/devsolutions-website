import { useGraphQL } from 'graphql-react'

export function getServicesSlider () {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride (options) {
      options.url = `${process.env.API_URL}`
    },
    operation: {
      query: /* GraphQL */ `
        {
          services {
            id
            icon {
              url
            }
            title
            short_content
          }
        }
      `
    }
  })

  return {
    loading,
    data,
    ...errors
  }
}

export function getMembersTeam () {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride (options) {
      options.url = `${process.env.API_URL}`
    },
    operation: {
      query: /* GraphQL */ `
        {
          teams {
            id
            photo {
              url
            }
            name
            description
            linkedin
          }
        }
      `
    }
  })

  return {
    loading,
    data,
    ...errors
  }
}

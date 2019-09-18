import { useGraphQL } from 'graphql-react'

export function getServicesSlider() {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
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

export function getServices() {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
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
            slug
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

export function getSingleService(slug) {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.env.API_URL}`
    },
    operation: {
      query: /* GraphQL */ `
        {
          services(where: { slug_contains: "${slug}" }) {
            title
            content
            icon {
              url
            }
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

export function getMembersTeam() {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
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

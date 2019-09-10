import { useGraphQL } from 'graphql-react'

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

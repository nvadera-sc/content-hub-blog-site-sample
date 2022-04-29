const contentHubBaseUrl = ""
const contentHubGQLToken = ""

export async function getData(query) {
    const response = await fetch(`${contentHubBaseUrl}/api/graphql/preview/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "X-GQL-Token": contentHubGQLToken,
        },
        body: JSON.stringify({query})
      })
      const responseObj = await response.json();
      return responseObj.data;
}
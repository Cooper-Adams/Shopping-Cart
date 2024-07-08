const apiKey = process.env.RAK_ETERNAL

exports.handler = async (event, context) => {
  try {
    let gameResults = await (await fetch(event.queryStringParameters.query + '&page=' + event.queryStringParameters.page + '&page_size=' + event.queryStringParameters.page_size + '&ordering=' + event.queryStringParameters.ordering + '&exclude_additions=' + event.queryStringParameters.exclude_additions + (event.queryStringParameters.tags != undefined ? '&tags=' + event.queryStringParameters.tags : '') + (event.queryStringParameters.genres != undefined ? '&genres=' + event.queryStringParameters.genres : '') + (event.queryStringParameters.platforms != undefined ? '&platforms=' + event.queryStringParameters.platforms : '') + '&key=' + apiKey)).json()

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(gameResults)
    }
  } catch (err) {
    console.error(err)
    
    return {
      statusCode: 500,
      message: err
    }
  }
}
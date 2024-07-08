const apiKey = process.env.RAK_ETERNAL

exports.handler = async (event, context) => {
  try {
    let gameData = await (await fetch('https://api.rawg.io/api/games/' + event.queryStringParameters.name + '/movies?key=' + apiKey)).json()

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(gameData)
    }
  } catch (err) {
    console.error(err)
    
    return {
      statusCode: 500,
      message: err
    }
  }
}
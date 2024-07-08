const apiKey = process.env.RAK_ETERNAL

exports.handler = async (event, context) => {
  try {
    let gameScreens = await (await fetch('https://api.rawg.io/api/games/' + event.queryStringParameters.name + '/screenshots?key=' + apiKey)).json()

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(gameScreens)
    }
  } catch (err) {
    console.error('SCREEN ERROR: ' + err)
    
    return {
      statusCode: 500,
      message: err
    }
  }
}
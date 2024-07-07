const apiKey = process.env.RAK_ETERNAL

exports.handler = async (event, context) => {
    try {
        let blankAch = []
        let tempAch = await (await fetch('https://api.rawg.io/api/games/' + event.queryStringParameters.name + '/achievements?page_size=40&key=' + apiKey)).json()

        while (true) {
            tempAch.results.map((ach) => { blankAch.push(ach) })
    
            if (tempAch.next != null) {
                tempAch = await (await fetch(tempAch.next)).json()
            } else {
                break
            }
        }

        return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blankAch)
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            message: err
        }
    }
}
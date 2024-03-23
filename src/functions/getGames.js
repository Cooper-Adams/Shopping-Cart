async function getGames(query) {
    let response = await fetch(query)
    return response.json()
}

export default getGames
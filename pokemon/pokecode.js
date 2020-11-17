
async function getAPIData(url) {
try {
    const respond = await fetch(url)
    const data = await response.json()
} catch (error) {
    console.error(error)
}

}
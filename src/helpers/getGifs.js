
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=s0o1Ws9Ow3D3kKgugJFG3BmsWX91P8PS`;
    const response = await fetch(url);
    const {data} = await response.json()

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1tO8N9QfOHJyps14rpyQW6k9ArjTvBYU&q=${category}&limit=10`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
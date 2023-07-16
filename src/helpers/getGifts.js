export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uGka7Wc4AU0rpNBkZGok5fXcDIVE4k3U&q=${category}&limit=20`
  
    const resp = await fetch(url)
    const {data}  = await resp.json()
  
    // console.log(resp)
    // console.log(data)
  
    const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium
    }))
  
    console.log(gifts)
  
  }
  
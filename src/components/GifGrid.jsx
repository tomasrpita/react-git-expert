import { getGifts } from "../helpers/getGifts";

export const GifGrid = ({category})  =>  {
    getGifts(category)

    return (
    <>
        <h3>{category}</h3>
    </>

  )
}


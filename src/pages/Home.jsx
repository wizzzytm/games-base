import { useLoaderData, Link } from "react-router-dom"
import { useEffect, useState, useMemo } from "react"

export default function Home(props) {
    const games = useLoaderData()

    const filtered = useMemo(()=>{
        return games.results.filter(
           (item)=>item.name.toLowerCase().includes(props.queryInfo.toLowerCase())
         )
     },[props.queryInfo,games]);
     console.log(filtered)
    
    return (
        <div className="container">
            {filtered.map(game => (
                <Link to={game.slug.toString()} key={game.id}>
                   <div className="card">
                        <img fetchpriority="high" src={game.background_image} className="image" />
                        <div className="info">
                            <h4 className="title">{game.name}</h4>
                            <p className="rating">{game.rating}/5</p>
                        </div>
                   </div>
                </Link>
            ))}
        </div>
    )
    
}
var requestOptions = {
     method: 'GET',
     redirect: 'follow',
     allow: 'GET'
};
export const gamesLoader = async () => {
    const res = await fetch("https://api.rawg.io/api/games?key=72a666f55c724008991b5a43690df520&page=1&page_size=30", requestOptions)
    return res.json()
}
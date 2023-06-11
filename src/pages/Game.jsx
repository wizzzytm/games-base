import { useLoaderData, useParams } from "react-router-dom"

export default function Game() {
    const {slug} = useParams()
    const game = useLoaderData()
    let styles = {}
    if(game.metacritic >= 75) {
        styles = {
            backgroundColor: "#6c3"
        }
    }
    else if (game.metacritic <= 74 && game.metacritic >=50) {
        styles = {
            backgroundColor: "#fc3"
        }
    }
    else if(game.metacritic <= 49 ) {
        styles = {
            backgroundColor: "#f00"
        }
    }
    
    let newArray = []
    const developerz = game.developers
    for (const i of developerz) {
        if(developerz.length === 1) {
            newArray.push(" " +i.name)

        }
        else {
            if(i.name === developerz[developerz.length - 1].name) {
                newArray.push(i.name)
            }
            else {
                newArray.push(" " + i.name + ", ")
            }
        }
        
    }

    let newPlatforms = []
    const platformz = game.platforms
    for (const i of platformz) {
        if(platformz.length === 1) {
            newPlatforms.push(" " +i.platform.name)
        }
        else {
            if(i.platform.name === platformz[platformz.length - 1].platform.name) {
                newPlatforms.push(i.platform.name)
            }
            else {
                newPlatforms.push(" " + i.platform.name + " ")
            }
        }
        
    }
    console.log(newPlatforms);

    return (
        
        <div className="opis">
            <div className="left">
                <h1 className="game-name">{game.name}</h1>
                <p className="game-developer">by
                    {newArray}
                </p>
                <div className="hr"></div>
                <div className="game-info"> {/* data wydania, ocena, metacritic*/}
                    <div className="game-info1">
                        <p className="game-rating">Rating: {game.rating}/5</p>
                        <p className="game-date">Release date: {game.released}</p>
                    </div>
                    <div className="game-meta" style={styles}>{game.metacritic}</div>
                </div>
                <div className="hr"></div>
                <p className="game-desc">{game.description_raw}</p> {/* opis*/}
                <div className="hr"></div>
                Platforms:
                <ul className="game-platforms">
                    
                    {newPlatforms.map(platformX => {                      {/* platformy*/}
                        return <li>{platformX}</li>
                    })}
                </ul>
                Genres:
                <ul className="game-genres">
                    
                    {game.genres.map(genreX => {                            {/* gatunki */}
                        return <li>{genreX.name}</li>
                    })}
                </ul>
            </div>
            <div className="right">
                    <img src={game.background_image} alt={game.slug} className="game-image" />
                    <img src={game.background_image_additional} alt={game.slug} className="game-image" />
            </div>
            

        </div>
    )
}

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    allow: 'GET'
};
export const gameLoader = async ({params}) => {
    const {slug} = params

    const res = await fetch(`https://api.rawg.io/api/games/${slug}?key=72a666f55c724008991b5a43690df520`, requestOptions)
    
    if(!res.ok) {
        throw Error("This place doesn't exist")
    }

    return res.json()
}


//?key=72a666f55c724008991b5a43690df520
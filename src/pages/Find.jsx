import { useEffect, useState } from "react"
import {Form, useLoaderData } from "react-router-dom"

export default function Find() {
    const [platformsData, setPlatformsData] = useState([])
    const [genresData, setGenresData] = useState([])
    
    function handleChange() {

    }
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
        const fetchPlatforms = () => {
          fetch("https://api.rawg.io/api/platforms?key=72a666f55c724008991b5a43690df520&page_size=6", requestOptions)
            .then(response => response.json())
            .then(result => setPlatformsData(result))
            .catch(error => console.log('error', error));}
    
        const fetchGenres = () => {
            fetch("https://api.rawg.io/api/genres?key=72a666f55c724008991b5a43690df520", requestOptions)
            .then(response => response.json())
            .then(result => setGenresData(result.results))
            .catch(error => console.log('error', error));}
   

     useEffect(() => {
        fetchPlatforms()
        
        fetchGenres()
    }, [])
    console.log(typeof(platformsData))
    console.log(platformsData)
    return (
        <Form onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} method="get"> 
            
                <p className="fag-title">
                    Pick platforms:
                </p>
                {platformsData.results.map(
                    item => {
                        return (
                        <label key={item.id}>
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                name={item.id}
                            />
                            {item.name}
                        </label>
                        )
                    }
                )} 
             
        </Form>

    )
}

    
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  useFetcher
} from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Home, {gamesLoader} from "./pages/Home"
import RootLayout from "./layouts/RootLayout"
import Game, { gameLoader } from "./pages/Game"
import GameError from "./pages/GameError"
import Home2, {gamesLoader2} from "./pages/Home2"



function App() {
  
  const [gamesData, setGamesData] = useState()
  const [searchData, setSearchData] = useState("")

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    Allow: 'GET'
  };
  
  // useEffect(() => {
  //   fetch("https://api.rawg.io/api/games?key=98b42a3161d740539755271fe6c5afd0", requestOptions)
  // .then(response => response.text())
  // .then(result => setGamesData(result))
  // .catch(error => console.log('error', error));
  // }, [])

  // Zczytywanie danych z formularza do state'a searchData
  // ----------------------------

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout query={searchData} setQuery={setSearchData}/>}>
        <Route index element={<Home queryInfo={searchData} />} loader={gamesLoader} />
        <Route path="2" element={<Home2 queryInfo={searchData} />} loader={gamesLoader2} />
        <Route path=":slug" errorElement={<GameError/>} element={<Game />} loader={gameLoader} />
        <Route path="/2/:slug" errorElement={<GameError/>} element={<Game />} loader={gameLoader} />
      </Route>
    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App

import React from 'react'
import Main from '../components/Main'
import { Row } from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Up Coming' fetchURL={requests.requestMovieUpcoming}/>
        <Row rowID='2' title='Popular Movies' fetchURL={requests.requestMoviePopular}/>
        <Row rowID='3' title='Popular Tv Shows' fetchURL={requests.requestTvPopular}/>
        <Row rowID='4' title='Top Rated Movies' fetchURL={requests.requestMovieTopRated}/>
        <Row rowID='5' title='TV Top Rated' fetchURL={requests.requestTvTopRated}/>
    </div>
  )
}

export default Home
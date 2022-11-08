import {useState, useEffect} from 'react'

import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Buscador from '../components/Buscador'
import TopCiudades from '../components/TopCiudades'
import Resultados from '../components/Resultados'

import { WEATHER_KEY, CIUDAD } from '../Key';

const Home = ({ciudadInit}) => {  
  const [ciudad, setCiudad] = useState(ciudadInit)  
  const [ciudades, setCiudades] = useState([])  

  useEffect(() => {
    const ciudadesLS = JSON.parse(localStorage.getItem('ciudades')) ?? []    
    if(ciudadesLS.length === 0){
      ciudadesLS.push(ciudad)
    }
    setCiudades(ciudadesLS)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>App Clima</title>
        <meta name="description" content="App clima" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Buscador ciudades={ciudades} setCiudades={setCiudades} setCiudad={setCiudad} />
      <TopCiudades ciudades={ciudades} setCiudad={setCiudad} />
      <Resultados ciudad={ciudad} />            
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CIUDAD}&appid=${WEATHER_KEY}`)
  const json = await res.json()
  return { ciudadInit: json}
}

export default Home
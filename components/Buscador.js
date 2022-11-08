import {useState, useEffect} from 'react'

import "bootstrap/dist/css/bootstrap.css";
import styles from '../styles/Home.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'

import { WEATHER_KEY } from '../Key';

export default function Buscador({ciudades, setCiudades, setCiudad}) {
    const [nombreCiudad, setNombreCiudad] = useState("")

    useEffect(()=>{
        config.autoAddCss = false
    },[])
    
    const handleClick = async() =>{
        if(nombreCiudad!==""){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${WEATHER_KEY}`)
            if(res.status===200){
                const json = await res.json()
                setCiudad(json)

                const ciudadesFilter = ciudades
                let bandera = false;
                ciudades.forEach(ciudad=>{
                    if(ciudad.name !== json.name){
                        bandera = true
                    }
                }) 
                if(bandera){
                    if(ciudadesFilter.length <5){
                        ciudadesFilter.push(json)
                    }else{
                        ciudades.shift();
                        ciudadesFilter.push(json)
                    }
                }
                setCiudades(ciudadesFilter)     
                localStorage.setItem('ciudades',JSON.stringify(ciudadesFilter))         
            }else{
                console.log("No encontrado")
            }
        }
        setNombreCiudad("")
    }

  return (
    <div className={`${styles.form} ${styles.linebtn} mb-4`}>
        <div className="form-group  mt-2">
            <label htmlFor="tipo"> 
                Escriba la ciudad
            </label> {" "}
            <input type="text" value={nombreCiudad} onChange={e=>setNombreCiudad(e.target.value)} className='m-2' />
            <button className='btn btn-success p-2 m-2' onClick={handleClick}>
                <FontAwesomeIcon className="fa-xs" icon={faSearch} /> Buscar 
            </button>
        </div>
    </div>
  )
}

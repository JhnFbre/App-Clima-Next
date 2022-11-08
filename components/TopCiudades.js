import styles from '../styles/Home.module.css'

export default function TopCiudades({ciudades, setCiudad}) {
    
  return (
    <div className={`row ${styles.linebtn}`}>
        {
            ciudades.map(ciudad=>(
            <div key={ciudad.id} className='col-md-2'>
                <button className="btn btn-success" onClick={()=>setCiudad(ciudad)}>
                    {ciudad.name}
                </button>
            </div>))
        }
    </div>
  )
}

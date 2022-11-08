import styles from '../styles/Home.module.css'

export default function Resultados({ciudad}) {
  return (
    <div className='container mt-4'>
        <div className="row">
            <div className="col-md-4">
                <h2 className='text-center text-info mb-4'>{ciudad.name}</h2>
            </div>
            <div className="col-md-4">
                <p>
                    <span className={styles.b}>ID :</span> 
                    {ciudad.id}
                </p>
                <p>
                    <span className={styles.b}>Código :</span> 
                    {ciudad.cod}
                </p>
                <p>
                    <span className={styles.b}>Zona :</span> 
                    {ciudad.timezone}
                </p>
            </div>
            <div className="col-md-4">
                <p>
                    <span className={styles.b}>Latitud :</span> 
                    {ciudad.coord.lat}
                </p>
                <p>
                    <span className={styles.b}>Longitud :</span> 
                    {ciudad.coord.lon}
                </p>
                <p>
                    <span className={styles.b}>Clima :</span> 
                    {ciudad.weather[0].main}
                </p>
                <p>
                    <span className={styles.b}>Temperatura :</span> 
                    {ciudad.main.temp}
                </p>
            </div>
        </div>
    </div>
  )
}

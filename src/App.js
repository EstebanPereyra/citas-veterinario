import {React, Fragment, useState, useEffect}  from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'



function App() {

  //Citas en localSotage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //Guarda todas las citas
  const [citas, setCitas] = useState(citasIniciales);

  // Use Effect cuando el State de citas cambia

  useEffect(() => {
    if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas));
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
  }, [citas, citasIniciales]);

  //Función que toma las citas actuales y agrega las nuevas

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]) 
  }


  // Función que elimina una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  //Función de título de citas

  const titulo = citas.length === 0 ? 'Agrega una nueva cita' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de turnos - veterinaria</h1>
      <div className="container">
        <div className="row">
         
         
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                />
              ))}
          </div>


        </div>

      </div>
    </Fragment>    
  );
}

export default App;

import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';


const Formulario = ({crearCita}) => {

    //State para citas

    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError] = useState(false)

    //Función que se ejecuta cada vez que el usuario escribe en un input

    const actualizarCitas = e => {
        setCita({
        ...cita,
        [e.target.name]: e.target.value})
    };

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        //Elimina mensaje de error
        setError(false);

        //Asignar ID
        cita.id = uuidv4();
        console.log(cita);

        //Crear la cita
        crearCita(cita)

        //Reiniciar el formulario
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitCita}>
                <label>Nombre de mascota</label>
                    <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarCitas}
                    value={mascota}
                    />

                <label>Nombre Dueño</label>
                    <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarCitas}
                    value={propietario}
                    />

                <label>Fecha</label>
                    <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarCitas}
                    value={fecha}
                    />

                <label>Hora</label>
                    <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarCitas}
                    value={hora}
                    />
                <label>Sintomas</label>
                    <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarCitas}
                    value={sintomas}
                    ></textarea>

                    <button
                    type="submit"
                    className="u-full-width button-primary"
                    >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;
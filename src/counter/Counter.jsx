// Hooks useState 
import { useState } from 'React';


function Counter() {
    //Asignar el estado de un componente
    const [contador, setContador] = useState(0); //Retorna un arreglo con dos valores
    return(
        <div>
            <p>
                Has hecho clic {contador} veces a este boton
            </p>
            <button onClick={ ()=>{ setContador(contador + 1) } } >Incrementar</button>
        </div>
    );
}

export default Counter;
import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import {toast} from "react-toastify"
import Swal from 'sweetalert2'

/* ESTA FUNCION CONTIENE LOS BOTONES PARA SUMAR O SACAR PRODUCTOS DEL CARRITO Y AGREGARLOS */
export default function ItemCount({stock}) {

    const [count, setCount ] = React.useState(1)
      
    const StockButtons = ({handle , text}) => {
        return <button className="add" onClick={handle}> { text } </button> 
    };

    /*SUMA PRODUCTOS*/
    const onAdd = () => {
        if (count < stock ) {
            setCount(count + 1)
        }
        else {
            toast.error('Hay superado el stock', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
/* RESTA PRODUTOS */
    const onDecrease =() => {
        if(count > 1) {setCount(count-1) } else {
            toast.error('No podes sacar mas productos', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
/* AGREGA LOS PRODUCTOS AL CARRITO */
    const addCart =() => {
        Swal.fire({
            title: '¡Felicitaciones!',
            text: 'Has agregado el producto al carrito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
          setCount(1)  
    }

    return(
        <Container>
            <Row > 
                <Col className="text-center"> 
                    <StockButtons text="+" handle={onAdd}/>
                    <span> {count} </span> 
                    <StockButtons text="-" handle={onDecrease}/>
                </Col>
            </Row>
            <Row>
                <StockButtons text="Agregar al carrito" handle={addCart}/>
            </Row>
        </Container>
    );
}
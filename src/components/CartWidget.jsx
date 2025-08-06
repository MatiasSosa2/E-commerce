import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="widget-carrito">
      <button className="boton-carrito">
        🛒
        <span className="notificacion-carrito">5</span>
      </button>
    </div>
  )
}

export default CartWidget

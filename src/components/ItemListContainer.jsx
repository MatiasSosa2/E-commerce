import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="contenedor-lista">
      <div className="contenedor">
        <h1 className="titulo-saludo">CARNES & PARRILLAS</h1>
        <p className="mensaje-saludo">{greeting}</p>
        
        <div className="proximamente">
          <div className="contenido-placeholder">
            <h3>Proximamente</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer

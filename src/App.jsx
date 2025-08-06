import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

// Componente principal
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Parrillas de hierro, cortes premium y todo para hacer asado " />
    </div>
  )
}

export default App

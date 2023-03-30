import './App.css';
import Mensaje from './Mensaje';


const Descripcion = () => {
  return <p>Esta es la app del curso Bootcamp Fullstack</p>
}


const App = () => {

  return(
    <div className="App">
    <Mensaje color= 'Red' message= 'Estamos '/>
    <Mensaje color= 'Yellow' message= 'aprendiendo'/>
    <Mensaje color= 'Blue' message= 'En un curso'/>
    <Mensaje message= 'De React'/>
    <Descripcion />
    
    </div>
  )
}

export default App;

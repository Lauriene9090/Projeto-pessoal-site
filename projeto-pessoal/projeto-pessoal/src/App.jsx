import { useState } from "react"
import PaginaPrincipal from "./components/Paginaprincipal"
import IngredienteInput from "./components/IngredienteInput"
import TiposReceitas from "./components/TiposReceitas"
import ListaReceitas from "./components/ListaReceitas"

export default function App(){
  const[state, setState] = useState("")
  return(
    <div>
      <PaginaPrincipal/>
      <IngredienteInput/>
      <TiposReceitas/>
      <ListaReceitas/>
    </div>
  )

}
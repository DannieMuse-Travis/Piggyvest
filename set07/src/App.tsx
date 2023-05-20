
import {RouterProvider} from "react-router-dom"
import { MainRoute } from "./router/MainRoute"

const App=()=>{
  return(
    <div>
       <RouterProvider router={MainRoute}/>
    </div>
  )
}

export default App
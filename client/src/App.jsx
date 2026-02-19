import { Route, Routes} from "react-router";

export default function App (){
  return (
    <div>
      <h1 className= "text-red-400"> my app</h1>
      <Routes>
        <Route path ="/" element={<p>Hello</p>}/>
        <Route path ="/bye" element={<p>Goodbye</p>}/>
      </Routes>
    </div>
  )
}


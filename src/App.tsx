import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
   return (
      <HashRouter>
         <div>
            <Routes>
               <Route path="/" element={<Navigate to="/Kanbas" />} />
               <Route path="/Labs/*" element={<Labs />} />
               <Route path="/Kanbas/*" element={<Kanbas />} />
               <Route path="/hello" element={<HelloWorld />} />
            </Routes>
         </div>
      </HashRouter>
   );
}
export default App;

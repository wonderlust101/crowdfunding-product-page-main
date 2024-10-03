import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";

const basename = import.meta.env.BASE_URL;

export default function App() {

  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

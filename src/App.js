import Contacts from "./pages/contacts";
import Home from "./pages/home";
import {Route, Routes} from "react-router"
import HowitWorks from "./pages/Howitworks";
import Parcel from "./pages/parcel";
import Warehouse from "./pages/warehouse";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tariffs from "./pages/tariffs";
import Forbusiness from "./pages/for-business";

function App() {
  return (
    <>
    <Header />
      <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/contacts"  element={<Contacts />}/>
      <Route path="/howitworks"  element={<HowitWorks />}/>
      <Route path="/warehouse"  element={<Warehouse />}/>
      <Route path="/parcel"  element={<Parcel />}/>
      <Route path="/tariffs"  element={<Tariffs />}/>
      <Route path="/forbusiness"  element={<Forbusiness />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

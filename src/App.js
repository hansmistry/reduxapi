import logo from "./logo.svg";
import { BrowserRouter, Form, Navigate, Route, Router, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Formapi from "../src/ApiForm/Coomponet/Formapi";
import Tableapi from "./ApiForm/Coomponet/Tableapi";
import ApiForm from "../src/UserApi/componet/ApiForm";
import ApiTable from "../src/UserApi/componet/ApiTable";
import ProForm from "./Product/Formcom/ProForm";
import ProTable from "./Product/Formcom/ProTable";
import HansForm from "./react-form/HansForm"
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/form'} />} />
          <Route path="/form" element={<Formapi />} >
          <Route path=":id"  />
          </Route>
            
          <Route path="/table" element={<Tableapi />} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/form'} />} />
          <Route path="/form" element={<ApiForm />} >
          <Route path=":id"  />
          </Route>
            
          <Route path="/table" element={<ApiTable />} />
        </Routes>
      </BrowserRouter> */}
{/* 
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navigate to={'/form'} />} />
          <Route path="/form" element={<ProForm />} >
          <Route path=":id"  />
          </Route>
          <Route path="/table" element={<ProTable />} />

        </Routes>
      </BrowserRouter> */}
      <HansForm/>
    </>
  );
}

export default App;

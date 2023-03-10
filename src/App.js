import './App.scss';
import Header from './components/Header';
import TableUser from './components/TableUser';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import {Routes , Route, Link } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <>
    <div className='app-container'>
          <Header />
          <Container>  
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/users" element={<TableUser />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
          
    </div>
    <ToastContainer
         position="top-right"
         autoClose={1000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
     />

    </>
  );
}

export default App;

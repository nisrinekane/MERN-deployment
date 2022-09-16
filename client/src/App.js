import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Create from './components/Create';
import List from './components/List'
import Detail from './components/Detail';
// import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Navigate to={'/pirates'}/>} path="/"/>
        <Route element={<Create />} path="/new" />
        <Route element={<List />} path="/pirates"/>
        <Route element={<Detail />} path="/pirates/:id" /> 
        {/* <Route element={<Update />} path="/pirates/edit/:id"/> */}
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { ExerciseList, AddExercise, EditExercise, AddUser } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <div className='px-5'>
        <Routes>
          <Route path="/" element={<ExerciseList />} />
          <Route path="/create" element={<AddExercise />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/user" element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

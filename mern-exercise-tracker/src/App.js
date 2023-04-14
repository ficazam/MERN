import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { ExerciseList, AddExercise, EditExercise, AddUser } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" element={<ExerciseList />} />
      <Route path="/create" element={<AddExercise />} />
      <Route path="/edit/:id" element={<EditExercise />} />
      <Route path="/user" element={<AddUser />} />
    </BrowserRouter>
  );
}

export default App;

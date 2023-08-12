import { useEffect, useState } from "react";

function App() {

  const [students, setStudents] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(error => setError(error))
  }, []);

  return (
    <>
      <h1>Lista de estudiantes</h1>
      <ul>
        {students.length &&
          students.map(student => {
            return (
              <li>
                <p>{student.id}</p>
                <p>{student.name}</p>
              </li>)
          })}
      </ul>

      {error & <p>{error}</p>}
    </>
  );
};

export default App;
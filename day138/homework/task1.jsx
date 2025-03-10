import React, { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [threshold, setThreshold] = useState(60); 

  const addStudent = () => {
    if (name && grade) {
      const newStudent = {
        id: Date.now(),
        name: name,
        grade: parseFloat(grade),
      };
      setStudents([...students, newStudent]);
      setName('');
      setGrade('');
    }
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const highlightStudent = (grade) => {
    return grade >= threshold ? 'high' : 'low';
  };

  return (
    <div className="app">
      <h1>Student Grade Tracker</h1>

      
      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="threshold">
        <label>
          Set Grade Threshold:
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
          />
        </label>
      </div>

      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {students.map((student) => (
            <li
              key={student.id}
              className={highlightStudent(student.grade)}
            >
              {student.name} - {student.grade}{' '}
              <button onClick={() => removeStudent(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

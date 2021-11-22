import { useState } from 'react';
import Axios from 'axios';

// Styles
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name,
      age,
      position,
      country,
      wage,
    }).then(() => console.log('axios success'));
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      console.log(response);
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />

        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />

        <label htmlFor="wage">Wage (year):</label>
        <input
          type="number"
          id="wage"
          onChange={(e) => setWage(e.target.value)}
          value={wage}
        />

        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <hr />
      <button onClick={getEmployees}>Show Employees</button>
      <div className="employees">
        {employeeList.map((val, key) => {
          console.log(val);
          return (
            <div id={key} className="employee">
              <h2>{val.name}</h2>
              <h3>{val.age}</h3>
              <h3>{val.country}</h3>
              <h3>{val.position}</h3>
              <h3>{val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

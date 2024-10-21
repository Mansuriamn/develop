import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [name, setname] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/info')
      .then((res) => setname(res.data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div>
      <center>Hello Welcome</center>
      <ul>
        {name.map((person, index) => (
          <li key={index}>
            {person.name} {person.surname}
          </li>
        ))}
      </ul>
    </div>
  );
}

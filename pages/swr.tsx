import { StudentDetails } from '@/component/swr';
import React, { useState } from 'react';

export default function App () {

    const [studentDetail, setStudentDetail ] = useState([1, 1, 1])

    function handleIncrease() {
        setStudentDetail((prev) => [...prev, 1])
    }
  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleIncrease}>Add</button>
      <ul>
        {
            studentDetail.map((x, index) => (
                <li key={index}><StudentDetails studentId='lea2aa9l7x3a5v0' /> - {x}</li>
            ))
        }
      </ul>
    </div>
  );
}

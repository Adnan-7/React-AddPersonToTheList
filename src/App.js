import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name,
        age,
        email,
      };
      setPeople([...people, newPerson]);
      // console.log(newPerson);
      setName('');
      setAge('');
      setEmail('');
    }
  };
  return (
    <>
      <section className='container'>
        <h4>Add Person to the list</h4>

        <form className='form'>
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input
              type='number'
              name='age'
              id='age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, name, age, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;

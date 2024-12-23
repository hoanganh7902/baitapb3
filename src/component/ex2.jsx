import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <>
      <h1>Bài tập 2: Biểu mẫu nhập liệu</h1>
      <form onSubmit={(e) => { e.preventDefault(); alert(name+  age + email) }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" id="age"
            onChange={(e) => setAge(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

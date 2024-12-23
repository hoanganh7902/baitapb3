import React, { useEffect, useState } from 'react'

function Exercise1() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(parseInt(num1) + parseInt(num2));
  }, [num1, num2])

  return (
    <div>
      <h1>Bài tập 1: Tính tổng đơn giản</h1>
      <input type="number" name="num1" id="num1" placeholder='Input number 1...' value={num1} 
      onChange={(e) => setNum1(e.target.value)}/>
      <span>+</span>
      <input type="number" name="num2" id="num2" placeholder='Input number 2...' value={num2}
      onChange={(e) => setNum2(e.target.value)}/>
      <span> = {result}</span>
    </div>
  )
}


export default Exercise1;
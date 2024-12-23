import React, { useState } from 'react'

export default function Ex5() {
    const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Bài tập 5: Hiển thị/Ẩn đoạn văn bản</h1>
      {show && <p>Đây là đoạn văn bản cần ẩn/hiện</p>}
      <button onClick={() => setShow(!show)}>Ẩn/Hiện</button>
    </div>
  )
}

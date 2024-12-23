import React, { useEffect, useState } from 'react'

export default function Languages() {
    const [lang, setLang] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        switch (lang) {
            case 'en':
                setMessage('Hello')
                break
            case 'vn':
                setMessage('Xin chào')
                break
            case 'kr':
                setMessage('안녕하세요')
                break
            default:
                setMessage('Hello')
                break
        }
    })
  return (
    <div>
      <h1>Bài tập 3: Bộ chọn ngôn ngữ</h1>
        <select onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="vn">Vietnamese</option>
            <option value="kr">Korean</option>
        </select>
        <br/>
        {message}
        
    </div>
  )
}

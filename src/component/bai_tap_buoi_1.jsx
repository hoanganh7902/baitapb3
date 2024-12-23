import React from 'react'

export default function CreateReactApp() {
    return (
        <div>
            <h1>Tạo ứng dụng React JS</h1>
            <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ul style={{ listStyleType: 'none', display: 'flex' }}>
                    <li style={{ marginRight: "20px" }}>Dalya Baron</li>
                    <li>Research students</li>
                </ul>
                <ul style={{ listStyleType: 'none', display: 'flex', marginRight: '20px' }}>
                    <li style={{ marginLeft: '10px' }}>Resume1</li>
                    <li style={{ marginLeft: '10px' }}>Resume2</li>
                    <li style={{ marginLeft: '10px' }}>Resume3</li>
                    <li style={{ marginLeft: '10px' }}>Resume4</li>
                </ul>
            </header>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px', padding: '0 20%', margin: 'auto' }}>
                <div style={{ marginRight: '40px' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'blue',
                        borderRadius: '50%'
                    }}></div>
                </div>
                <div style={{ display: 'flex-1', textAlign: 'left' }}>
                    <h1>Dalya Baron</h1>
                    <h6>A Bit About Me</h6>
                    <p>Một trong những từ dành riêng là class. Các thuộc tính React xoay quanh một số từ dành riêng này bằng cách thay đổi nó một chút.
                        Thay vì thêm thuộc tính class như HTML thuần, bạn sẽ thêm tên thuộc tính className.</p>
                </div>
            </div>
            <div>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
                    <li><div style={{
                        display: 'flex', width: '50px', height: '50px',
                        backgroundColor: 'blue', borderRadius: '100%', margin: '10px'
                    }}></div></li>
                    <li><div style={{
                        display: 'flex', width: '50px', height: '50px',
                        backgroundColor: 'orange', borderRadius: '100%', margin: '10px'
                    }}></div></li>
                    <li><div style={{
                        display: 'flex', width: '50px', height: '50px',
                        backgroundColor: 'red', borderRadius: '100%', margin: '10px'
                    }}></div></li>
                    <li><div style={{
                        display: 'flex', width: '50px', height: '50px',
                        backgroundColor: 'purple', borderRadius: '100%', margin: '10px'
                    }}></div></li>
                </ul>
            </div>
        </div>
    )
}

import React, {useState} from 'react'
import './Greeting.css'

function Greeting() {
    const [value, setValue] = useState('friend')

    const handleSubmit = e => {
        e.preventDefault()
        setValue('')
    }
    return (
    <>
    <h1>Hello {value}</h1>
        <div className="form-area">
        <form onSubmit={handleSubmit}>
            <label>Who are you</label>
            <input type="text" name="name" value={value} onChange={e => setValue(e.target.value)} />
           {/*  <button type="submit" className="subbutt">Submit</button> */}
        </form>
        </div>
    </>
    )
}

export default Greeting

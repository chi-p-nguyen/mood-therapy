import React, {useState} from 'react'
import './Textbox.css'
function Textbox({label}) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setValue('')
    }
    return (
        <div className="form-area">
        <form onSubmit={handleSubmit}>
            <label>{label}</label>
            <input type="text" name="name" value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Textbox

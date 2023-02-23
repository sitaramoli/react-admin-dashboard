import React from 'react'
import './Dropdown.scss'

const Dropdown = ({ label, name, id, options, onChange, selected }) => {
    return (
        <div className="dropdown">
            <label className='dropdown__label'>{label}</label>
            <select name={name} id={id} onChange={onChange} value={selected} >
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}

export default Dropdown
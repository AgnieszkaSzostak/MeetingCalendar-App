import React from "react"
import { useSelector } from "react-redux"

export const CalendarField = (props) => {
    const {label, name, placeholder, value, onChange} = props
    const error = useSelector(state => state.errors)
    return (
        <div>
            <label>{label}  {error && error[name] ? <span>{error[name]}</span>  : null}
                <input value={value} onChange={onChange} name={name} placeholder={placeholder}>
                </input>
            </label>
        </div>
    )
}
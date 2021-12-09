import React from 'react'

const SearchStatus = (props) => {
    const textForms = ['человек', 'человека']
    const n = Math.abs(props.props) % 100
    const n1 = n % 10
    if (n > 10 && n < 20) {
        return (
            <span className="badge bg-primary m-2">
                {props.props} {textForms[0]} тусанут с тобой сегодня
            </span>
        )
    }
    if (n1 > 1 && n1 < 5) {
        return (
            <span className="badge bg-primary m-2">
                {props.props} {textForms[1]} тусанут с тобой сегодня
            </span>
        )
    }
    if (n1 === 1) {
        return (
            <span className="badge bg-primary m-2">
                {props.props} {textForms[0]} тусанет с тобой сегодня
            </span>
        )
    }
    return (
        <span className="badge bg-primary m-2">
            {props.props} {textForms[0]} тусанут с тобой сегодня
        </span>
    )
}

export default SearchStatus

import React from 'react'

const Quality = (props) => {
    const badge = 'badge m-2 '
    const getBadgeClasses = (clr) => {
        const classes = badge + 'bg-' + clr
        return classes
    }
    return props.quality.map((quality) => (
        <span className={getBadgeClasses(quality.color)} key={quality._id}>
            {quality.name}
        </span>
    ))
}

export default Quality

import React from 'react'

export default function AnimWaterFall({gap = 1, initialDelay = 1, children}) {
    let CSS = {animationDelay: `${initialDelay}s`};
    return Array.isArray(children) ? children.map((child, i) => {
        CSS = {animationDelay: `${i === 0 ? initialDelay : initialDelay+gap*i}s`};
        return React.cloneElement(child, {style: CSS})
    }) : React.cloneElement(children, {style: CSS});
}

import React from 'react'

export default function AnimDelay({timeInSeconds, children}) {
    const CSS = {animationDelay: `${timeInSeconds}s`};
    return Array.isArray(children) ? children.map(child => React.cloneElement(child, {style: CSS})) : React.cloneElement(children, {style: CSS});
}

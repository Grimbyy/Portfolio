import React from 'react'

export default function AnimWaterFall({gap = 1, initialDelay = 1, children}) {
    let CSS = {animationDelay: `${initialDelay}s`};
    if (!children) return;
    return Array.isArray(children) ? children.map((child, i) => {
        CSS = {animationDelay: `${i === 0 ? initialDelay : initialDelay+gap*i}s`};
        return React.cloneElement(child, {style: {...child.style, ...CSS}, key: i})
    }) : React.cloneElement(children, {style: {...children.style, ...CSS}});
}

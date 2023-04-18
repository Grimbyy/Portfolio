import React, { useEffect, useRef } from 'react'

export default function Card({title, text, image, style, onClick, customStyle}) {
  const ref = useRef(null);
  return (
    <div ref={ref} onClick={(e) => onClick(e, {title, ref})} className="card" style={{...(style||{}), backgroundImage: image || '', ...(customStyle[title]||{})}}>
        {title ? <h1 className="card-title">{title}</h1> : null}
        {text ? <p className="card-text">{text}</p> : null}
    </div>
  )
}

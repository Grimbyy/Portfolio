import React from 'react'
import './CardTile.css'

export function CardTile({children, maxView = 3}) {
    const _children = Array.isArray(children) ? children.map((c, i) => React.cloneElement(c, {key: i})) : children ? [React.cloneElement(children)] : [];
  return <div className="card-tile">
    {_children.map((c) => c)}
  </div>
}

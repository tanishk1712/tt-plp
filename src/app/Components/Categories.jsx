import React from 'react'
import './style/categories.css'
export default function Categories(props) {
  return (
    <div className="categorie-box">
        <div className="svg-icon">{props.svgIcon}</div>
        <div className="svg-name" >{props.svgName}</div>
    </div>
  )
}

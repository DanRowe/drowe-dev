import React from "react"
import { NavColumn } from './nav-column'
import { Link } from "gatsby";

export default({ page }) => (
  <>
    {page.map(link => (
      <Link 
        to={link.link} 
        style={{textDecoration: 'none'}}
        key={link.name}
        activeClassName="active"
        className="btn-outline-primary"
        style={{
          borderWidth: "1px !important", 
          borderRadius: "8px",
          textDecoration: "none"
        }}
      ><NavColumn 
        // className="btn-outline-primary"
      >{link.name}</NavColumn></Link>
    ))}
  </>
)
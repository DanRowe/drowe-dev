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
        activeStyle={{
          borderWidth: "1px", 
          borderRadius: "8px",
          textDecoration: "none",
        }}
        className="btn-outline-primary"
      ><NavColumn 
        // className="btn-outline-primary"
      >{link.name}</NavColumn></Link>
    ))}
  </>
)
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
            ><NavColumn className="btn-outline-primary">{link.name}</NavColumn></Link>
    ))}
  </>
)
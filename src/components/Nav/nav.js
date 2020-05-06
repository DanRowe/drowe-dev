import React from "react"
import { NavColumn } from './nav-column'
import { Link } from "gatsby";

export default({ page }) => (
  <>
    {page.map(link => (
            <Link to={link.link} style={{textDecoration: 'none', color: 'black'}}><NavColumn>{link.name}</NavColumn></Link>
    ))}
  </>
)
import React from "react"
import { NavColumn } from './nav-column'
import { Link } from "gatsby";

const Navigation = ({ page }) => {
  const isActive = (link) => {
    return location.pathname === link
  }

  return (
    <>
      {page.map(link => (
        <Link 
          to={link.link} 
          style={{textDecoration: 'none'}}
          key={link.name}
        >
          <NavColumn 
          // className="btn-outline-primary"
          className={isActive(link.link) ? "btn-outline-primary active" : "btn-outline-primary"}
          >
            {link.name}
          </NavColumn>
        </Link>
      ))}
    </>
  )
}

export default Navigation
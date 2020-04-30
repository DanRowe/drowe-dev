import React from 'react'
import { NavColumn } from './nav-column'

export default ({Link}) => (
    <>
        <NavColumn><div style={{display: `inline-block`, fontSize: `3em`}}>{Link}</div></NavColumn>
    </>
)
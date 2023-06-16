"use client"

import Link from 'next/link';
import React from 'react'

const Inner = ({ ele, id }) => {
    return (
        <div>
            <h1 onClick={() => {
                console.log(ele);
            }}>Omar</h1>

            <Link href={"http://localhost:3000/posts/" + id}> go to {id}</Link>
        </div>
    )
}

export default Inner
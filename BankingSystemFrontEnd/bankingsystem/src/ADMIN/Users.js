import React from 'react'
import './Admin.css'

export default function Users(props) {
    return (
        <div id='users' >
            <ul>
                <li>
                    <div id="userbox">
                        <h1>{props.firstName}</h1>
                        <h1>{props.lastName}</h1>
                    </div>
                </li>
            </ul>
        </div>
    )
}

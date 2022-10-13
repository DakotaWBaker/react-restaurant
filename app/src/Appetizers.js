import { getData } from "./app";
import { useState } from "react";
import React from "react";



    export default function Appetizers (props) {
        console.log(props)
        return (
            <ul>
        <li> {props.item.title} - {props.item.price} </li>
        </ul>
        )
    }
    
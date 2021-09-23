import React from 'react'
// import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

function Comment() {

    const { id } = useParams();

    return (
        <div>
            <div>
                    {id}
            </div>
        </div>
    )
}

export default Comment

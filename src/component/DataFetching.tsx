import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState("")
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios
            .get(`/person`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="number" value={id} onChange={e => {
                setId(parseInt(e.target.value));
            }}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post}</div>
        </div>
    )
}

export default DataFetching
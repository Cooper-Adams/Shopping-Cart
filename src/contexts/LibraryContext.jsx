import React, { createContext, useState } from 'react'

export const LibraryContext = createContext([])

export const LProvider = (props) => {
    const [library, setLibrary] = useState([])

    const lValue = {
        library,
        setLibrary,
    }

    return (
        <LibraryContext.Provider value={lValue}>
            {props.children}
        </LibraryContext.Provider>
    )
}
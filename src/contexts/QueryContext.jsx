import React, { createContext, useState } from 'react'

export const QueryContext = createContext([])

export const QCProvider = (props) => {
    const [one, setone] = useState([])
    const [two, settwo] = useState([])
    const [three, setthree] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState('page_size=15')
    const [six, setsix] = useState([])

    const ccValue = {
        one,
        setone,
        two,
        settwo,
        three,
        setthree,
        page,
        setPage,
        pageSize,
        setPageSize,
        six,
        setsix
    }

    return (
        <QueryContext.Provider value={ccValue}>
            {props.children}
        </QueryContext.Provider>
    )
}
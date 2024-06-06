import React, { createContext, useState } from 'react'

export const QueryContext = createContext([])

export const QCProvider = (props) => {
    const [order, setOrder] = useState('added')
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState('page_size=15')
    const [queryGenre, setQueryGenre] = useState('')
    const [queryTag, setQueryTag] = useState('')
    const [sort, setSort] = useState('ordering=')

    const ccValue = {
        order,
        setOrder,
        page,
        setPage,
        pageSize,
        setPageSize,
        sort,
        setSort,
        queryGenre,
        setQueryGenre,
        queryTag,
        setQueryTag,
    }

    return (
        <QueryContext.Provider value={ccValue}>
            {props.children}
        </QueryContext.Provider>
    )
}
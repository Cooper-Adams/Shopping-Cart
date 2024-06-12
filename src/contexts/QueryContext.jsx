import React, { createContext, useState } from 'react'

export const QueryContext = createContext([])

export const QCProvider = (props) => {
    const [order, setOrder] = useState('ordering=-')
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState('page_size=15')
    const [queryGenre, setQueryGenre] = useState('')
    const [queryTag, setQueryTag] = useState('')
    const [sort, setSort] = useState('added')

    const [query, setQuery] = useState('https://api.rawg.io/api/games?key=hellorobots&stores=1&page=' + page + '&' + pageSize + '&' + order + sort)
    
    const ccValue = {
        order,
        setOrder,
        page,
        setPage,
        pageSize,
        setPageSize,
        sort,
        setSort,
        query,
        setQuery,
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
import React, { createContext, useState } from 'react'

export const QueryContext = createContext([])

export const QCProvider = (props) => {
    const [additions, setAdditions] = useState(false)
    const [order, setOrder] = useState('ordering=-')
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState('page_size=15')
    const [queryGenre, setQueryGenre] = useState('')
    const [queryTag, setQueryTag] = useState('')
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('added')
    
    const [query, setQuery] = useState('https://api.rawg.io/api/games?key=hellorobots&stores=1&page=' + page + '&' + pageSize + '&' + order + sort + '&exclude_additions=' + additions)
    
    const ccValue = {
        additions,
        setAdditions,
        order,
        setOrder,
        page,
        setPage,
        pageSize,
        setPageSize,
        query,
        setQuery,
        queryGenre,
        setQueryGenre,
        queryTag,
        setQueryTag,
        search,
        setSearch,
        sort,
        setSort
    }

    return (
        <QueryContext.Provider value={ccValue}>
            {props.children}
        </QueryContext.Provider>
    )
}
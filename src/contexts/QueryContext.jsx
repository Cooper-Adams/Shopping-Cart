import React, { createContext, useEffect, useState } from 'react'

export const QueryContext = createContext([])

export const QCProvider = (props) => {
    const [additions, setAdditions] = useState(false)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState('page_size=20')
    const [platforms, setPlatforms] = useState('')
    const [queryGenre, setQueryGenre] = useState('')
    const [queryTag, setQueryTag] = useState('')
    const [search, setSearch] = useState('')
    const [searchBar, setSearchBar] = useState('')
    const [sort, setSort] = useState('added')
    
    const [query, setQuery] = useState('https://api.rawg.io/api/games?stores=1&page=' + page + '&' + pageSize + '&ordering=-' + sort + '&exclude_additions=' + additions)
    
    useEffect(() => {
        setQuery('https://api.rawg.io/api/games?stores=1&page=' + page + '&' + pageSize + '&ordering=-' + sort + '&exclude_additions=' + additions + (queryTag != '' ? ('&tags=' + queryTag) : '') + (queryGenre != '' ? ('&genres=' + queryGenre) : '') + (platforms.length != 0 ? ('&platforms=' + platforms) : '') + (search != '' ? ('&search=' + search) : ''))
    }, [additions, page, platforms, queryGenre, queryTag, search, sort])

    const ccValue = {
        additions,
        setAdditions,
        page,
        setPage,
        pageSize,
        setPageSize,
        platforms,
        setPlatforms,
        query,
        setQuery,
        queryGenre,
        setQueryGenre,
        queryTag,
        setQueryTag,
        search,
        setSearch,
        sort,
        setSort,
        searchBar,
        setSearchBar
    }

    return (
        <QueryContext.Provider value={ccValue}>
            {props.children}
        </QueryContext.Provider>
    )
}
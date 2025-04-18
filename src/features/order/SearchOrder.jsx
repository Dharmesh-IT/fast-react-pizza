import React from 'react'
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
    const [query, setQuery] = React.useState('')
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (query.trim() === '') {
            return;
        }
        navigate(`/order/${query}`);
        setQuery('');

        // Perform search action here
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for your order"
                aria-label="Search for your order"
                values={query} onChange={e => setQuery(e.target.value)} />
        </form>

    )
}

export default SearchOrder;

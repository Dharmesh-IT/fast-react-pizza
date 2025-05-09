import React from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [query, setQuery] = React.useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (query.trim() === "") {
            return;
        }
        navigate(`/order/${query}`);
        setQuery("");

        // Perform search action here
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="w-28 rounded-full border-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:focus:w-72 sm:w-64 focus:outline-none focus:*:ring focus:ring-yellow-800 focus:ring-offset-2 focus:ring-offset-yellow-800"
                type="text"
                placeholder="Search for your order"
                aria-label="Search for your order"
                values={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}

export default SearchOrder;

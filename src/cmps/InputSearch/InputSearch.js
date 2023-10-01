import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {filterUsers} from '../../store/slices/userSlice'

const InputSearch = ({ data }) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const handleInputChange = event => {
        setQuery(event.target.value);

    };

    useEffect(() => {
        dispatch(filterUsers(query))
    }, [query]);

    return (
        <div>
            <input
                type="text"
                placeholder={'Search...'}
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default InputSearch;
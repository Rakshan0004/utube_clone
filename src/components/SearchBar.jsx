import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButoon } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper
            component='form'
            onSubmit={() => {}}
            sx={{
                borderRadius: 30,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr:
            }}
    >
        <input
            className="search-bar"
            placeholder="Search..."
            value=""
            onChange={() => {}}
            />
            <IconButoon type="submit" sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButoon>
        </Paper>
    )
}

export default SearchBar
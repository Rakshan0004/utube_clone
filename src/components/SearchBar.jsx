import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';

const SearchBar = () => {
    return (
        <Paper
            component='form'
            onSubmit={() => {}}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 10 } //Note: this is for small devices
            }}
        >
            Rakshan-
            <input
                className="search-bar"
                placeholder="Search..."
                value=""
                onChange={() => {}}
                />
                <IconButton type="submit" sx={{ p: '10px', color: 'orange' }}>
                    <Search />
                </IconButton>
                <IconButton sx={{ p: '10px', color: 'orange' }}>
                    <MicIcon />
                </IconButton>
            </Paper>
    )
}

export default SearchBar
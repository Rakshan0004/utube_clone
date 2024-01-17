import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/icons-material';

import Navbar from './components/Navbar';
import ChannelDetail from './components/ChannelDetail';
import VedioDetail from './components/VedioDetail';

const App = () => {
    <BrowserRouter>
    <Box sx={{ backgroundcolor: '#000' }}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/vedio/:id" element={<VedioDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>
        </Box>
    </BrowserRouter>
};

export default App;
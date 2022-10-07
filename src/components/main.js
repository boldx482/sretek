import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import BlogPage from './blogs';
import Sport from './blogSport';
import Entertainment from './blogEntertainment';
import Technology from './blogTech';
import SingleBlog from './singleBlog'
import Footer from './footer';
import Header from './header';

const Main = () => {
    return (
        <div style={{fontFamily: 'arial'}}>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<BlogPage />} />
                    <Route path='/sport' element={<Sport />} />
                    <Route path='/entertainment' element={<Entertainment />} />
                    <Route path='/technology' element={<Technology />} />
                    <Route path='/singleblog/:Blog_id' element={<SingleBlog />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default Main;
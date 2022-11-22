//import logo from './logo.svg';

import { Header } from './react-components/header';
import { Home } from './react-components/home/home'; 
import { News } from './react-components/news/news';
import { Events } from './react-components/events/events';
import { Music } from './react-components/audio/audio';
import { Video } from './react-components/video/video';
import { Bio } from './react-components/bio';
import { Footer } from './react-components/footer';
import { Contact } from './react-components/contact';
import { ScrollToTop } from './scrolltotop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  


  return (
    <Router>
      <div>
        <Header />
        <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/events' element={<Events />} />
          <Route path='/music' element={<Music />} />
          <Route path='/video' element={<Video />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/contact' element={<Contact />} />
          
            
          
          
        </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
   
 );
}

export default App;

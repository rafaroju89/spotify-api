import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Search } from '../components/search/Search';
import { Navbar } from '../components/ui/Navbar';
import {ArtistDetails} from '../components/artists/ArtistDetails';
import {AlbumDetails} from '../components/albums/AlbumDetails';

export const DashboarRouter = () =>{
  
  return (
    <>
      
      <Router>
      <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/artist/details/:id" component={ArtistDetails}/>
            <Route exact path="/album/details/:id" component={AlbumDetails}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}


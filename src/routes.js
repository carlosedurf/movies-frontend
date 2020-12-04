import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainContent } from './partials/MainComponents';
import Header from './components/Header';

import Home from './pages/Home';
import Movie from './pages/Movie';

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path="/" component={Home} />

                <Route exact path="/movie/:id" component={Movie} />

            </Switch>
        </BrowserRouter>
    );

};

export default Routes;
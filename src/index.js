import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
//vid 31 differents types de router... HashRouter, MemoryRouter

//COMPONENTS
import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from './components/404';

class App extends Component {
    render() {
        return <div>home</div>
    }
}

ReactDom.render(
    <BrowserRouter>
        {/* put it in div because i can only return one thing */}
        <div>
            <header>
                <NavLink to="/" activeStyle={{color:'green'}}>Home</NavLink><br />
                <NavLink to="/posts" activeStyle={{color:'green'}}>Posts</NavLink><br />
                <NavLink to="/profile" activeStyle={{color:'green'}}>Profile</NavLink><br />
                <hr />
            </header> {/* Always shows */}
            <Switch> {/* When using switch the most specific route should be first... to be matched first... and there is no need to use exact keyword but now theres a bug soooo u gotta use it... nope nvm still a bug but the guy says whatever */}
                <Route path="/posts/:id" component={PostsItem}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route exact path="/posts" component={Posts}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector('#root'));
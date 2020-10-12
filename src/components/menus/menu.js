import React, { Component } from 'react';
import Filters from './filter';
import Header from './header';
import HomeList from './home-list/home-list';
import Test from './test';


class Menu extends Component {
    render() {
        return (
            <div >
                <Header />
                <Filters />
                <HomeList />
            </div>
        );
    }
}

export default Menu;

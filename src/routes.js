/**
 * Created by Stoneleee on 2017/10/16.
 * Mail to weflylee@163.com
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Page1 from './home/Page1';
import Page2 from './home/Page2';
import Page3 from './home/Page3';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
        </div>
    );
}
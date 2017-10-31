/**
 * Created by Stoneleee on 2017/10/16.
 * Mail to weflylee@163.com
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
        </div>
    );
}
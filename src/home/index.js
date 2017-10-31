/**
 * Created by Stoneleee on 2017/10/20.
 * Mail to weflylee@163.com
 */
import React from 'react'
import NavComponent from './NavComponent'

import './index.scss'

class Home extends React.Component {

    render () {
        return (
            <div className="page">
                <NavComponent />
                <h1>home</h1>
            </div>
        )
    }
}

export default Home
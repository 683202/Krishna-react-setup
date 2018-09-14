// components are rendered here.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import DefectTable from './Components/DefectTable';
import AddDefect from './Components/AddDefect';
import {BrowserRouter, Route, Link} from 'react-router-dom';


var DEFECTS = [
    {id:0,category:"UI", description:"Button not appearing", priority:3,status:"open"},
    {id:1,category:"Functionality", description:"Submit not working", priority:1,status:"open"},
    {id:2,category:"Change Request", description:"Implement Certificate functionality", priority:3,status:"open"}
]


localStorage.setItem('defects', JSON.stringify(DEFECTS));

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <ul>
                <li><Link to='/view-defects'>View Defects</Link></li>
                <li><Link to='/'>Add Defects</Link></li>
            </ul>
            <Route path ="/" component={App}/>
        </React.Fragment>
    </BrowserRouter>,
    document.getElementById('app')
);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// create react component with link to other components
class Landing extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="card-with-links card ">
                        <div className="card-body">
                            <h2 className="card-title">Landing Page</h2>
                            <p className="card-text">
                                This is the landing page.
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><Link to="/table1" className="">Table 1</Link></li>
                                <li className="list-group-item"><Link to="/table2">Table 2</Link></li>
                                <li className="list-group-item"><Link to="/dropdown1">Dropdown 1</Link></li>
                                <li className="list-group-item"><Link to="/dropdown2">Dropdown 2</Link>  </li>
                            </ul>
                        </div>
                    
                    </div>                    
                </div>


            </div>
        );
    }
}

export default Landing;

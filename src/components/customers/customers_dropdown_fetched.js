import React, { Component } from 'react';

class DropdownFetched extends Component {
    constructor(){
        super();
        this.state = {
          customers: [{id: 1, name: ""}, {id: 2, name: ""}, {id: 3, name: ""}],
          customersUpdated: [{id: 1, name: ""}, {id: 2, name: ""}, {id: 3, name: ""}]
        }
      }
        componentDidMount(){
            fetch("https://react-test-automation.herokuapp.com/api", 
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({"delay": 3})
            })
            .then(response => response.json())
            .then(data => this.setState({customersUpdated: data}))
            .catch(err => console.log(err));
        }
        refreshState = () => {
            this.setState({customers: this.state.customersUpdated})
        }

        render() {
            return (
                <div>
                  <div className="row justify-content-center">
                    <div className="input-form">
                      <div>
                        <h2 className="display-6">The scope</h2>
                        <p  className="text-muted">React renders the dropdown with blank options, but it is rerendered after the API call is made and after it receives a click.</p>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.refreshState}>
                          Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {this.state.customers.map(customer => <li key={customer.id} className="dropdown-item">{customer.name}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            );
        }
}
export default DropdownFetched;
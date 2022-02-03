import React, { Component } from 'react';

class TablePrerendered extends Component {
  constructor(){
    super();
    this.state = {
      customers: [{id: 1, name: "Some initial data"}, {id: 2, name: "Some initial data"}, {id: 3, name: "Some initial data"}], 
      delay : 5,
      tableVisibility: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:5000/api", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"delay": 3})
    })
    .then(response => response.json())
    .then(data => this.setState({customers: data}))
    .catch(err => console.log(err));
  }
  render() {

    return (
      <div className="row justify-content-center">
        <div className="input-form">
          <div>
            <h2 className="display-6">The scope</h2>
            <p  className="text-muted">React renders the table with some initial (or outdated/stale) data but refreshes the component after the api call is complete.</p>
          </div>
          <table class="table table-with-customers">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.customers.map(customer => <tr key={customer.id}>
                  <th scope="row">{customer.id}</th>
                  <td>{customer.name}</td>
                </tr>)}
              </tbody>
            </table>          
        </div>

      </div>
    );
  }
}

export default TablePrerendered;
import React, { Component } from 'react';

class Customers extends Component {
  constructor(){
    super();
    this.state = {
      customers: [], 
      delay : 3,
      tableVisibility: false
    }
  }
  submit = e => {
    e.preventDefault()
    console.log(e.target)
    fetch("https://react-test-automation.herokuapp.com/api", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"delay": this.state.delay})
    })
    .then(response => response.json())
    .then(data => this.setState(this.state.customers = [...data]))
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="row justify-content-center">
        <div className="input-form">
          <div>
            <h2 className="display-6">The scope</h2>
            <p  className="text-muted">The server sends the data back with a delay. A table placeholder is rendered before the call.</p>
          </div>
          <form onSubmit={this.submit} className="mt-5" >
            <input type="number" name="delay" placeholder="delay in seconds" 
            onChange={e => this.setState({delay: e.target.value})} className="form-control"/>
            <button className="btn btn-outline-info mt-2" onClick={this.submit} >Get Customers</button>
          </form>
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

export default Customers;
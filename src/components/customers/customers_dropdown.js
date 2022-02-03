import React, { Component } from 'react';

class DropdownPrerendered extends Component {
  constructor() {
    super();
    this.state = {
      customers: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Pete' },
      ],
      customersUpdated: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Pete' },
      ],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        customersUpdated: [
          { id: 1, name: 'John' },
          { id: 2, name: 'Pete' },
          { id: 3, name: 'Mary' },
        ],
      });
    }, 5000);
  }
  refreshState = () => {
    this.setState({ customers: this.state.customersUpdated });
  };
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="input-form">
            <div>
              <h2 className="display-6">The scope</h2>
              <p className="text-muted">
                React renders the dropdown on page load without api call, but
                for some reason, the last option is missing, and the list is
                updated after the component is mounted (~5s) and receives a click.
              </p>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={this.refreshState}
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {this.state.customers.map((customer) => (
                  <li key={customer.id} className="dropdown-item">
                    {customer.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DropdownPrerendered;

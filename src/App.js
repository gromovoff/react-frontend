import "./styles.css";
import Customers from './components/customers/customers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/customers/landing';
import TablePrerendered from './components/customers/customers_prerendered';
import DropdownPrerendered from './components/customers/customers_dropdown';
import DropdownFetched from './components/customers/customers_dropdown_fetched';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route  path="table1" element={<Customers />} />
          <Route  path="table2" element={<TablePrerendered />} />
          <Route  path="dropdown1" element={<DropdownPrerendered />} />
          <Route  path="dropdown2" element={<DropdownFetched />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

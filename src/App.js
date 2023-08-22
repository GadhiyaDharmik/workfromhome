import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './pages/form';
import Table from './pages/table'
import Header from './pages/common/header'
import Footer from "./pages/common/footer"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Item 1',
      category: 'Category 1',
      color: 'Red',
      size: 'Medium',
      price: 10,
      selected: false,
    },
    {
      id: 2,
      name: 'Item 1',
      category: 'Category 1',
      color: 'Red',
      size: 'Medium',
      price: 10,
      selected: false,
    },
    {
      id: 3,
      name: 'Item 1',
      category: 'Category 1',
      color: 'Red',
      size: 'Medium',
      price: 10,
      selected: false,
    },
    // Add more data entries as needed
  ]);
  const [editing, setEditing] = useState(false);

  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const colors = ['Red', 'Green', 'Blue'];
  const sizes = ['Small', 'Medium', 'Large'];

  const handleCheckboxChange = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteSelected = () => {
    setData((prevData) => prevData.filter((item) => !item.selected));
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSaveCell = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>
                {editing ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleSaveCell(item.id, 'name', e.target.value)
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editing ? (
                  <select
                    value={item.category}
                    onChange={(e) =>
                      handleSaveCell(item.id, 'category', e.target.value)
                    }
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.category
                )}
              </td>
              <td>
                {editing ? (
                  <select
                    value={item.color}
                    onChange={(e) =>
                      handleSaveCell(item.id, 'color', e.target.value)
                    }
                  >
                    {colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.color
                )}
              </td>
              <td>
                {editing ? (
                  <select
                    value={item.size}
                    onChange={(e) =>
                      handleSaveCell(item.id, 'size', e.target.value)
                    }
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.size
                )}
              </td>
              <td>
                {editing ? (
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleSaveCell(item.id, 'price', e.target.value)
                    }
                  />
                ) : (
                  item.price
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDeleteSelected}>Delete Selected</button>
      <button onClick={handleEditToggle}>
        {editing ? 'Save Changes' : 'Edit'}
      </button>
    </div>);
}

export default App;

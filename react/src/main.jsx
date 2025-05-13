import React from 'react'
import ReactDOM from 'react-dom/client'
import Search from './search'


const input_items = [
  { id: 1, name: 'Book' },
  { id: 2, name: 'Pencil' },
  { id: 3, name: 'Apple' },
  { id: 4, name: 'Notebook' },
  { id: 5, name: 'Pen' },
  { id: 6, name: 'Banana' },
  { id: 7, name: 'Eraser' },
  { id: 8, name: 'Orange' },
  { id: 9, name: 'Marker' },
  { id: 10, name: 'Laptop' },
//...
  { id: 1001, name: 'Backpack' },
  { id: 1002, name: 'Avocado'}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Search items={input_items}/>
  </React.StrictMode>,
)

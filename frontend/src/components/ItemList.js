import React, { useState, useEffect } from 'react'; 

import axios from 'axios'; 

const ItemList = () => { 

    const [items, setItems] = useState([]); 
  
    const [newItem, setNewItem] = useState({ name: '', description: '' }); 
  
    
  
    useEffect(() => { 
  
      axios.get('/api/items') 
  
        .then(response => setItems(response.data)) 
  
        .catch(err => console.error('Error fetching items:', err)); 
  
    }, []); 

    const handleAddItem = () => { 

        axios.post('/api/items', newItem) 
    
          .then(response => { 
    
            setItems([...items, response.data]); 
    
            setNewItem({ name: '', description: '' }); 
    
          }) 
    
          .catch(err => console.error('Error adding item:', err)); 
    
    }; 
    return ( 

        <div> 
    
          <h1>Items</h1> 
    
          <ul> 
    
            {items.map(item => ( 
    
              <li key={item._id}>{item.name}: {item.description}</li> 
    
            ))} 
    
          </ul> 
    
          <div> 
    
            <input 
    
              type="text" 
    
              placeholder="Item name" 
    
              value={newItem.name} 
    
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} 
    
            /> 
    
            <input 
    
              type="text" 
    
              placeholder="Item description" 
    
              value={newItem.description} 
    
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} 
    
            /> 
    
            <button onClick={handleAddItem}>Add Item</button> 
    
          </div> 
    
        </div> 
    
      ); 
    
    }; 
    
      
export default ItemList; 
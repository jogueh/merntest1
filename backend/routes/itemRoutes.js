const express = require('express'); 

const router = express.Router(); 

const Item = require('../models/itemModel'); 

router.get('/', async (req, res) => { 

    try { 
  
      const items = await Item.find(); 
  
      res.json(items); 
  
    } catch (err) { 
  
      res.status(400).json({ error: err.message }); 
  
    } 
  
  }); 

router.post('/', async (req, res) => { 

const { name, description } = req.body; 

try { 

    const newItem = new Item({ name, description }); 

    await newItem.save(); 

    res.json(newItem); 

} catch (err) { 

    res.status(400).json({ error: err.message }); 

} 

}); 

module.exports = router; 
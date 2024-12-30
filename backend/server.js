const express = require('express'); 

const mongoose = require('mongoose'); 

const cors = require('cors'); 

require('dotenv').config({ path: '../.env' }); 
const app = express(); 

app.use(cors()); 

app.use(express.json()); 

const dbURI = process.env.MONGO_URI; // MongoDB URI from Azure Cosmos DB 

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Connected")).catch((err) => console.log("MongoDB Connection Error:", err));

const itemRoutes = require('./routes/itemRoutes'); 

app.use('/api/items', itemRoutes); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { 

  console.log(`Server running on port ${PORT}`); 

}); 
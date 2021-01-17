const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());
const PORT = process.env.PORT || 4000;

app.use('/api/items', require('./routes/itemsRoute'));

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});

module.exports = app;
const pool = require('../config/db');

const buscarProducto = async (req, res) => {
    const Busqueda = req.params.busqueda;

    try{
        const row = await pool.query('SELECT * FROM productos where nombre ilike $1', [`%${Busqueda}%`]);
        res.json(row.rows);
    }catch(error){
        console.log(`Error: ${error}`);
        res.status(500).json({error: error.message});
    }
};

const buscarCategoria = async (req, res) => {
    const Busqueda = req.params.busqueda;

    try{
        const row = await pool.query('SELECT * FROM categoria where nombre ilike $1', [`%${Busqueda}%`]);
        res.json(row.rows);
    }catch(error){
        console.log(`Error: ${error}`);
        res.status(500).json({error: error.message});
    }
};

module.exports ={ buscarProducto, buscarCategoria };
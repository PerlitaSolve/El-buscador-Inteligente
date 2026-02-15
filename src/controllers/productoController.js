const pool = require('../config/db');

const buscarProducto = async (req, res) => {
    const Busqueda = req.params.busqueda;

    if (!Busqueda || Busqueda.trim() === '') {
        return res.status(400).json({ error: 'La búsqueda no puede estar vacía' });
    }
    try{
        const row = await pool.query('SELECT p.nombre, p.descripcion, c.nombre AS categoria, p.precio, p.stock FROM productos p JOIN categoria c ON p.id_categoria = c.id WHERE p.nombre ILIKE $1 OR p.descripcion ILIKE $1', [`%${Busqueda}%`]);
        res.json(row.rows);
    }catch(error){
        console.log(`Error: ${error}`);
        res.status(500).json({error: error.message});
    }
};

const ListarProductos = async (req, res) => {
    try{
        const row = await pool.query('SELECT p.nombre, p.descripcion, c.nombre AS categoria, p.precio, p.stock FROM productos p JOIN categoria c ON p.id_categoria = c.id');
        res.json(row.rows);
    }catch(error){
        console.log(`Error: ${error}`);
        res.status(500).json({error: error.message});
    }
};

module.exports ={ buscarProducto, ListarProductos };
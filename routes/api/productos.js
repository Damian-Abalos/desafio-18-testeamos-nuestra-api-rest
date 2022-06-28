import express from 'express'
import ProductosRepo from "../../repositories/ProductosRepo.js";
import Producto from "../../modelos/Producto.js";
import ProductoMostrable from '../../adaptadores/ProductoMostrable.js';
import getDao from '../../daos/ProductosDaoFactory'
const apiProducts = express.Router()

// const repo = new ProductosRepo();
// const p1 = new Producto({
//     id: 1,
//     nombre: 'sonrisas',
//     precio: 100,
//     stock: 100
//   })
  
//   const p2 = new Producto({
//     id: 2,
//     nombre: 'tita',
//     precio: 80,
//     stock: 100
//   })
//   await repo.add(p1)
//   await repo.add(p2)
  
  function mostrarTodos(prods) {
    const productos = []
    prods.forEach(p => productos.push(new ProductoMostrable(p).comoTextoPlano()))
    return productos
}
function mostrar(prod) {
    console.log(new ProductoMostrable(prod).comoTextoPlano())
}

apiProducts.get('/api/productos', async (req, res) => {
    res.send(await getDao.getAll())
})

export default apiProducts
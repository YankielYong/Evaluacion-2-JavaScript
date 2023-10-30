import { esValido, idValido } from './util.js';

export class ProveedorSuministros {
  constructor(
    nombre = 'Proveedor',
    numeroID,
    productos = [],
    ubicacion = 'CUJAE'
  ) {
    let _nombre = nombre;
    idValido(numeroID);
    let _numeroID = numeroID;
    let _productos = productos;
    let _ubicacion = ubicacion;

    this.getNombre = () => _nombre;
    this.getNumeroID = () => _numeroID;
    this.getProductos = () => _productos;
    this.getUbicacion = () => _ubicacion;

    this.setNombre = function (nombreNuevo) {
      _nombre = nombreNuevo;
    };

    this.setUbicacion = function (ubicacionNueva) {
      _ubicacion = ubicacionNueva;
    };

    /*
     * Si ya este proveedor tiene ese producto, no se agregará
     */
    this.agregarProducto = function (productoNuevo) {
      if (_productos.indexOf(productoNuevo) == -1)
        _productos.push(productoNuevo);
    };

    this.eliminarProducto = function (productoEliminar) {
      let indice = _productos.indexOf(productoEliminar);
      if (indice != -1) _productos.splice(indice, 1);
    };
  }
}

export class Mercado {
  constructor() {
    const proveedores = new Map();

    this.getProveedores = () => proveedores;
  }

  agregarProveedor(proveedor) {
    if (esValido(proveedor))
      this.getProveedores().set(proveedor.getNumeroID(), proveedor);
  }

  eliminarProveedor(numeroID) {
    this.getProveedores().delete(numeroID);
  }

  obtenerProveedor(numeroID) {
    return this.getProveedores().get(numeroID);
  }

  obtenerProveedores() {
    return Array.from(this.getProveedores().values());
  }

  proveedoresQueSuministranProducto(producto) {
    let proveedores = [];
    for (const i of this.getProveedores().values()) {
      if (i.getProductos().indexOf(producto) != -1) proveedores.push(i);
    }
    return proveedores;
  }
}

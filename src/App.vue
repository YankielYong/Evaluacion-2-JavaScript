<script setup>
import { ref } from 'vue';
import Bienvenido from './components/Bienvenido.vue';
import CartelProveedores from './components/CartelProveedores.vue';
import { ProveedorSuministros, Mercado } from './utils/logica.js';

let p1 = new ProveedorSuministros('Pedro', '96041142402', ['Arroz'], 'Cerro');
let p2 = new ProveedorSuministros('Juan', '94120532745', ['Frijoles'], 'Playa');
let m = new Mercado();
m.agregarProveedor(p1);
m.agregarProveedor(p2);

const mercado = ref(m);
const ci = ref('');
const nombre = ref('');
const ubicacion = ref('');
const productos = ref([]);
const deleteCI = ref('');
const productoFiltrar = ref('Arroz');
const proveedoresFiltrados = ref([]);

function agregar() {
    let p = new ProveedorSuministros(nombre.value, ci.value, productos.value, ubicacion.value);
    mercado.value.agregarProveedor(p);
    ci.value = '';
    nombre.value = '';
    ubicacion.value = '';
    productos.value = [];
    filtrarProveedores();
}

function eliminar() {
    mercado.value.eliminarProveedor(deleteCI.value);
    deleteCI.value = '';
    filtrarProveedores();
}

function filtrarProveedores() {
    proveedoresFiltrados.value = mercado.value.proveedoresQueSuministranProducto(productoFiltrar.value);
}

</script>

<template>
    <Bienvenido></Bienvenido>
    <CartelProveedores></CartelProveedores>
    <table id="tabla" border="1px" :key="mercado">
        <tr>
            <td><b>CI</b></td>
            <td><b>Nombre</b></td>
            <td><b>Productos</b></td>
            <td><b>Ubicación</b></td>
        </tr>
        <tr v-for="i in mercado.obtenerProveedores()">
            <td>{{ i.getNumeroID() }}</td>
            <td>{{ i.getNombre() }}</td>
            <td>{{ i.getProductos() }}</td>
            <td>{{ i.getUbicacion() }}</td>
        </tr>
    </table>
    <div id="divG">
        <div id="div1">
            <label for="ci">Número CI</label><br>
            <input v-model="ci" type="text" id="ci"><br><br>
            <label for="nombre">Nombre</label><br>
            <input v-model="nombre" type="text" id="nombre"><br><br>
            <label for="ubi">Ubicación</label><br>
            <input v-model="ubicacion" type="text" id="ubi"><br><br>
        </div>
        <div id="div2">
            <label for="div2" id="lbl1">Productos</label><br><br>
            <input v-model="productos" type="checkbox" id="arroz" value="Arroz">
            <label for="arroz">Arroz</label><br>
            <input v-model="productos" type="checkbox" id="frijoles" value="Frijoles">
            <label for="frijoles">Frijoles</label><br>
            <input v-model="productos" type="checkbox" id="vegetales" value="Vegetales">
            <label for="vegetales">Vegetales</label><br>
            <input v-model="productos" type="checkbox" id="carne" value="Cárnicos">
            <label for="carne">Cárnicos</label><br>
        </div>
        <button @click="agregar" type="submit" id="btnAgregar">Agregar</button>
        <div id="div3">
            <label for="delete-ci">Número CI</label>
            <input v-model="deleteCI" type="text" id="delete-ci">
        </div>
        <button @click="eliminar" id="btnEliminar">Eliminar</button>
        <div id="div4">
            <h3 id="div4-h3">Proveedores que suministran</h3>
            <select @click="filtrarProveedores" v-model="productoFiltrar" name="Productos" id="sel-prod">
                <option value="Arroz">Arroz</option>
                <option value="Frijoles">Frijoles</option>
                <option value="Vegetales">Vegetales</option>
                <option value="Cárnicos">Cárnicos</option>
            </select>
            <table id="tabla2" border="1px" :key="proveedoresFiltrados">
                <tr>
                    <td><b>CI</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Productos</b></td>
                    <td><b>Ubicación</b></td>
                </tr>
                <tr v-for="i in proveedoresFiltrados">
                    <td>{{ i.getNumeroID() }}</td>
                    <td>{{ i.getNombre() }}</td>
                    <td>{{ i.getProductos() }}</td>
                    <td>{{ i.getUbicacion() }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style>
#tabla {
    text-align: center;
    margin: auto;
    table-layout: fixed;
    width: 700px;
}

#divG {
    position: relative;
    display: inline-block;
    top: 20px;
}

#lbl1 {
    font-size: 20px;
}

#div1 {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 170px;
}

#div2 {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 400px;
    width: 100px;
}

#btnAgregar {
    position: absolute;
    left: 300px;
    top: 200px;
    width: 100px;
    height: 25px;
}

#div3 {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 900px;
}

#btnEliminar {
    position: absolute;
    left: 940px;
    top: 90px;
    width: 100px;
    height: 25px;
}

#div4 {
    position: absolute;
    top: 250px;
    left: 170px;
}

#div4-h3 {
    display: inline-block;
    font-size: 20px;
    font-style: normal;
    width: 260px;
}

#tabla2 {
    text-align: center;
    margin: auto;
    table-layout: fixed;
    width: 700px;
}
</style>

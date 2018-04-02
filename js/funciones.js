var MaquinaExpendedora = /** @class */ (function () {
    function MaquinaExpendedora() {
        this.p1 = new Producto('A1', 'Papa Pollo Margarita', 1300);
        this.p2 = new Producto('B2', 'Jugo Hit', 2000);
        this.p3 = new Producto('C3', 'Chocolatina Jet', 500);
        this.p4 = new Producto('D4', 'Galletas Festival', 800);
    }
    MaquinaExpendedora.prototype.darProducto1 = function () {
        return this.p1;
    };
    MaquinaExpendedora.prototype.darProducto2 = function () {
        return this.p2;
    };
    MaquinaExpendedora.prototype.darProducto3 = function () {
        return this.p3;
    };
    MaquinaExpendedora.prototype.darProducto4 = function () {
        return this.p4;
    };
    MaquinaExpendedora.prototype.abastecerProducto1 = function (pUnidades) {
        this.p1.abastecer(pUnidades);
    };
    MaquinaExpendedora.prototype.abastecerProducto2 = function (pUnidades) {
        this.p2.abastecer(pUnidades);
    };
    MaquinaExpendedora.prototype.abastecerProducto3 = function (pUnidades) {
        this.p3.abastecer(pUnidades);
    };
    MaquinaExpendedora.prototype.abastecerProducto4 = function (pUnidades) {
        this.p4.abastecer(pUnidades);
    };
    MaquinaExpendedora.prototype.venderProducto1 = function () {
        if (this.p1.darCantidadUnidadesDisponibles() > 0) {
            this.p1.vender();
        }
        else {
            alert("No se puede vender, no hay existencias del p1");
        }
    };
    MaquinaExpendedora.prototype.venderProducto2 = function () {
        if (this.p2.darCantidadUnidadesDisponibles() > 0) {
            this.p2.vender();
        }
        else {
            alert("No se puede vender,no hay existencias del p2");
        }
    };
    MaquinaExpendedora.prototype.venderProducto3 = function () {
        if (this.p3.darCantidadUnidadesDisponibles() > 0) {
            this.p3.vender();
        }
        else {
            alert("No se puede vender,no hay existencias del p3");
        }
    };
    MaquinaExpendedora.prototype.venderProducto4 = function () {
        if (this.p4.darCantidadUnidadesDisponibles() > 0) {
            this.p4.vender();
        }
        else {
            alert("No se puede vender,no hay existencias del p4");
        }
    };
    MaquinaExpendedora.prototype.darCantidadTotalVentas = function () {
        var cantidadTotal = this.p1.darCantidadUnidadesVendidas() +
            this.p2.darCantidadUnidadesVendidas() +
            this.p3.darCantidadUnidadesVendidas() +
            this.p4.darCantidadUnidadesVendidas();
        return cantidadTotal;
    };
    MaquinaExpendedora.prototype.darValorTotalVentas = function () {
        var valorVentas = this.p1.darCantidadUnidadesVendidas() * this.p1.darPrecio() +
            this.p2.darCantidadUnidadesVendidas() * this.p2.darPrecio() +
            this.p3.darCantidadUnidadesVendidas() * this.p3.darPrecio() +
            this.p4.darCantidadUnidadesVendidas() * this.p4.darPrecio();
        return valorVentas;
    };
    MaquinaExpendedora.prototype.darPorcentajeDisponibilidad = function (pCapacidadMaxima) {
        var porcentajeDisp = 100 - ((this.p1.darCantidadUnidadesDisponibles() +
            this.p2.darCantidadUnidadesDisponibles() +
            this.p3.darCantidadUnidadesDisponibles() +
            this.p4.darCantidadUnidadesDisponibles()) * 100 / pCapacidadMaxima);
        return porcentajeDisp;
    };
    return MaquinaExpendedora;
}());
var Producto = /** @class */ (function () {
    function Producto(identificador, nombre, precio) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadUnidadesDisponibles = 0;
        this.cantidadUnidadesVendidas = 0;
    }
    Producto.prototype.darIdentificador = function () {
        return this.identificador;
    };
    Producto.prototype.darNombre = function () {
        return this.nombre;
    };
    Producto.prototype.darPrecio = function () {
        return this.precio;
    };
    Producto.prototype.darCantidadUnidadesDisponibles = function () {
        return this.cantidadUnidadesDisponibles;
    };
    Producto.prototype.darCantidadUnidadesVendidas = function () {
        return this.cantidadUnidadesVendidas;
    };
    Producto.prototype.abastecer = function (pUnidades) {
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles + pUnidades;
    };
    Producto.prototype.vender = function () {
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles - 1;
        this.cantidadUnidadesVendidas = this.cantidadUnidadesVendidas + 1;
    };
    return Producto;
}());
var m = new MaquinaExpendedora();
function abasteciendo_papas() {
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");
    ;
    m.abastecerProducto1(parseInt(cant));
    var disp = m.darProducto1().darCantidadUnidadesDisponibles();
    document.getElementById('disp_papa').innerHTML = 'Disponibles : ' + disp;
}
function abasteciendo_jugos() {
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");
    m.abastecerProducto2(parseInt(cant));
    var disp = m.darProducto2().darCantidadUnidadesDisponibles();
    document.getElementById('disp_jugo').innerHTML = 'Disponibles : ' + disp;
}
function abasteciendo_chocolates() {
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");
    ;
    m.abastecerProducto3(parseInt(cant));
    var disp = m.darProducto3().darCantidadUnidadesDisponibles();
    document.getElementById('disp_choco').innerHTML = 'Disponibles : ' + disp;
}
function abasteciendo_galletas() {
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");
    ;
    m.abastecerProducto4(parseInt(cant));
    var disp = m.darProducto4().darCantidadUnidadesDisponibles();
    document.getElementById('disp_galleta').innerHTML = 'Disponibles : ' + disp;
}
// Funciones de compras
function comprando_papas() {
    var cant_disp = m.darProducto1().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0) {
        alert('El producto se encuentra agotado');
    }
    else {
        m.venderProducto1();
        var disp = m.darProducto1().darCantidadUnidadesDisponibles();
        document.getElementById('disp_papa').innerHTML = 'Disponibles : ' + disp;
    }
}
function comprando_jugos() {
    var cant_disp = m.darProducto2().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0) {
        alert('El producto se encuentra agotado');
    }
    else {
        m.venderProducto2();
        var disp = m.darProducto2().darCantidadUnidadesDisponibles();
        document.getElementById('disp_jugo').innerHTML = 'Disponibles : ' + disp;
    }
}
function comprando_chocolates() {
    var cant_disp = m.darProducto3().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0) {
        alert('El producto se encuentra agotado');
    }
    else {
        m.venderProducto3();
        var disp = m.darProducto3().darCantidadUnidadesDisponibles();
        document.getElementById('disp_choco').innerHTML = 'Disponibles : ' + disp;
    }
}
function comprando_galletas() {
    var cant_disp = m.darProducto4().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0) {
        alert('El producto se encuentra agotado');
    }
    else {
        m.venderProducto4();
        var disp = m.darProducto4().darCantidadUnidadesDisponibles();
        document.getElementById('disp_galleta').innerHTML = 'Disponibles : ' + disp;
    }
}
// Cantidad de ventas
function cantidad_ventas() {
    alert("La cantidad de ventas de la máquina es " + m.darCantidadTotalVentas());
}
function total_ventas() {
    alert("El valor total de ventas de la máquina es " + m.darValorTotalVentas());
}
function disp_Maquina() {
    var cant_disp = prompt("Ingrese la capacidad de la máquina");
    var porcentaje = m.darPorcentajeDisponibilidad(parseInt(cant_disp));
    //porcentaje = Math.round(porcentaje);
    alert("El porcentaje de disponibilidad de la máquina es " + porcentaje + "%");
}
function unidades_vendidas() {
    var vend_papa = m.darProducto1().darCantidadUnidadesVendidas();
    var vend_jugo = m.darProducto2().darCantidadUnidadesVendidas();
    var vend_chocolate = m.darProducto3().darCantidadUnidadesVendidas();
    var vend_galleta = m.darProducto4().darCantidadUnidadesVendidas();
    alert("La cantidad de unidades vendidas por producto es:\n Papa: " + vend_papa
        + "\n Jugos: " + vend_jugo
        + "\n Chocolatinas: " + vend_chocolate
        + "\n Galletas: " + vend_galleta);
}

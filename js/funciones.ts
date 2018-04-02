class MaquinaExpendedora{

    private p1: Producto;
    private p2: Producto;
    private p3: Producto;
    private p4: Producto;


    constructor(){
        this.p1 = new Producto('A1','Papa Pollo Margarita', 1300);
        this.p2 = new Producto('B2', 'Jugo Hit', 2000);
        this.p3 = new Producto('C3','Chocolatina Jet', 500);
        this.p4 = new Producto('D4','Galletas Festival', 800);
    }

    public darProducto1(): Producto{
        return this.p1;
    }

    public darProducto2(): Producto{
        return this.p2;
    }

    public darProducto3(): Producto{
        return this.p3;
    }

    public darProducto4(): Producto{
        return this.p4
    }

    public abastecerProducto1(pUnidades: number): void{    
        this.p1.abastecer(pUnidades);
    }

    public abastecerProducto2(pUnidades: number): void{
        this.p2.abastecer(pUnidades);
    }

    public abastecerProducto3(pUnidades: number): void{
        this.p3.abastecer(pUnidades);
    }

    public abastecerProducto4(pUnidades: number): void{
        this.p4.abastecer(pUnidades);
    }

    public venderProducto1(): void{
        if (this.p1.darCantidadUnidadesDisponibles() > 0) {
            this.p1.vender();
        }
        else{
            alert("No se puede vender, no hay existencias del p1");
        } 
    }

    public venderProducto2(): void{
        if (this.p2.darCantidadUnidadesDisponibles() > 0) {
            this.p2.vender();
        }
        else{
            alert("No se puede vender,no hay existencias del p2");
        }
    }

    public venderProducto3(): void{
        if (this.p3.darCantidadUnidadesDisponibles() > 0) {
            this.p3.vender();
        }
        else{
            alert("No se puede vender,no hay existencias del p3");
        }
    }

    public venderProducto4(): void{
        if (this.p4.darCantidadUnidadesDisponibles() > 0) {
            this.p4.vender();
        }
        else{
            alert("No se puede vender,no hay existencias del p4");
        }
    }

    public darCantidadTotalVentas(): number{
        let cantidadTotal = this.p1.darCantidadUnidadesVendidas() +
                            this.p2.darCantidadUnidadesVendidas() +
                            this.p3.darCantidadUnidadesVendidas() +
                            this.p4.darCantidadUnidadesVendidas();
        return cantidadTotal;
    }
    public darValorTotalVentas(): number{
        let valorVentas = this.p1.darCantidadUnidadesVendidas() * this.p1.darPrecio() +
                          this.p2.darCantidadUnidadesVendidas() * this.p2.darPrecio() +
                          this.p3.darCantidadUnidadesVendidas() * this.p3.darPrecio() +
                          this.p4.darCantidadUnidadesVendidas() * this.p4.darPrecio();
        return valorVentas;
    }

    public darPorcentajeDisponibilidad(pCapacidadMaxima: number): number{
        let porcentajeDisp = 100 - ((this.p1.darCantidadUnidadesDisponibles() +
                                     this.p2.darCantidadUnidadesDisponibles() +
                                     this.p3.darCantidadUnidadesDisponibles() +
                                     this.p4.darCantidadUnidadesDisponibles()) * 100 / pCapacidadMaxima)
        return porcentajeDisp;
    }
}

class Producto{

    private identificador: string;
    private nombre : string;
    private precio : number;
    private cantidadUnidadesDisponibles : number;
    private cantidadUnidadesVendidas : number;


    constructor(identificador:string,nombre:string,precio: number){
        this.identificador = identificador;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadUnidadesDisponibles = 0;
        this.cantidadUnidadesVendidas = 0;

    }

    public darIdentificador(){
        return this.identificador;
    }

    public darNombre(){
        return this.nombre;
    }

    public darPrecio(){
        return this.precio;
    }

    public darCantidadUnidadesDisponibles(){
        return this.cantidadUnidadesDisponibles;
    }

    public darCantidadUnidadesVendidas(){
        return this.cantidadUnidadesVendidas;
    }

    public abastecer(pUnidades: number){
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles + pUnidades;
    }

    public vender(){
       this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles - 1;
       this.cantidadUnidadesVendidas = this.cantidadUnidadesVendidas + 1;
    }

}
var m = new MaquinaExpendedora();

function abasteciendo_papas(){
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");;
    m.abastecerProducto1(parseInt(cant));
    let disp = m.darProducto1().darCantidadUnidadesDisponibles();
    document.getElementById('disp_papa').innerHTML='Disponibles : '+ disp;  
}

function abasteciendo_jugos(){
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");
    m.abastecerProducto2(parseInt(cant));
    let disp = m.darProducto2().darCantidadUnidadesDisponibles();
    document.getElementById('disp_jugo').innerHTML='Disponibles : '+ disp;  
}

function abasteciendo_chocolates(){
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");;
    m.abastecerProducto3(parseInt(cant));
    let disp = m.darProducto3().darCantidadUnidadesDisponibles();
    document.getElementById('disp_choco').innerHTML='Disponibles : '+ disp;  
}

function abasteciendo_galletas(){
    var cant = prompt("Ingrese el número de unidades que abastecera el producto");;
    m.abastecerProducto4(parseInt(cant));
    let disp = m.darProducto4().darCantidadUnidadesDisponibles();
    document.getElementById('disp_galleta').innerHTML='Disponibles : '+ disp;  
}
// Funciones de compras
function comprando_papas(){
    let cant_disp = m.darProducto1().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0){
        alert('El producto se encuentra agotado');
    }
    else{
        m.venderProducto1();
        let disp = m.darProducto1().darCantidadUnidadesDisponibles();
        document.getElementById('disp_papa').innerHTML='Disponibles : '+ disp;  
    }  
}

function comprando_jugos(){
    let cant_disp = m.darProducto2().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0){
        alert('El producto se encuentra agotado');
    }
    else{
        m.venderProducto2();
        let disp = m.darProducto2().darCantidadUnidadesDisponibles();
        document.getElementById('disp_jugo').innerHTML='Disponibles : '+ disp; 
    }  
}

function comprando_chocolates(){
   let cant_disp = m.darProducto3().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0){
        alert('El producto se encuentra agotado');
    }
    else{
        m.venderProducto3();
        let disp = m.darProducto3().darCantidadUnidadesDisponibles();
        document.getElementById('disp_choco').innerHTML='Disponibles : '+ disp; 
    }  
}

function comprando_galletas(){
    let cant_disp = m.darProducto4().darCantidadUnidadesDisponibles();
    if (cant_disp <= 0){
        alert('El producto se encuentra agotado');
    }
    else{
        m.venderProducto4();
        let disp = m.darProducto4().darCantidadUnidadesDisponibles();
        document.getElementById('disp_galleta').innerHTML='Disponibles : '+ disp;   
    }  
}

// Cantidad de ventas
function cantidad_ventas(){
    alert("La cantidad de ventas de la máquina es "+m.darCantidadTotalVentas());
}
function total_ventas(){
    alert("El valor total de ventas de la máquina es "+m.darValorTotalVentas());
}

function disp_Maquina(){
    let cant_disp = prompt("Ingrese la capacidad de la máquina");
    let porcentaje = m.darPorcentajeDisponibilidad(parseInt(cant_disp));
    //porcentaje = Math.round(porcentaje);
    alert("El porcentaje de disponibilidad de la máquina es " + porcentaje + "%");
}

function unidades_vendidas(){
    let vend_papa = m.darProducto1().darCantidadUnidadesVendidas();
    let vend_jugo = m.darProducto2().darCantidadUnidadesVendidas();
    let vend_chocolate = m.darProducto3().darCantidadUnidadesVendidas();
    let vend_galleta = m.darProducto4().darCantidadUnidadesVendidas();

    alert("La cantidad de unidades vendidas por producto es:\n Papa: " + vend_papa 
            +"\n Jugos: " + vend_jugo 
            +"\n Chocolatinas: " + vend_chocolate
            +"\n Galletas: " + vend_galleta);

}
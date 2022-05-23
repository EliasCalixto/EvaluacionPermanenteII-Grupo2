const root = document.getElementById('root');

const h1 = document.createElement('h1');
h1.textContent='Amortización Sistema Francés'
h1.classList.add('h1','text-center')
root.appendChild(h1)

const p1 = document.createElement('p');
p1.textContent='La amortización por el sistema francés, se caracteriza por cuotas iguales, valores de amortización del principal e interés cracientes.'
p1.classList.add('text-justify','m-1')
root.appendChild(p1)

const p2 = document.createElement('p');
p2.textContent='Para calcular los pagos mensuales introduzca: El principal, el plazo en meses y la tasa de interés mensual. Utilice el punto como separador decimal. Por ejemplo: 25.152,57; se escribe 25152.47; Los resultados aparecerán de forma automática, después de pinchar en "Calcular".'
p2.classList.add('text-justify','m-1')
root.appendChild(p2)

// TABLA
const containerTabla=document.createElement('div');
containerTabla.classList.add('m-2','border','col-xxl-3','col-5','col-md-5','col-sm-7','col-10')
root.appendChild(containerTabla)

const titulo=document.createElement('div');
titulo.textContent='Amortización Sistema Francés';
titulo.classList.add('text-tabla','text-center','bg-primary','m-0','py-1','bold','font-weight-bold','text-light','h5')
containerTabla.appendChild(titulo);

// fila1

const fila1=document.createElement('div');
fila1.classList.add('fila')
fila1.classList.add('text-tabla','m-1','d-flex','justify-content-between')
containerTabla.appendChild(fila1);

const principal=document.createElement('div');
principal.classList.add('col1');
principal.textContent='Principal:';
principal.classList.add('text-tabla','m-1')
fila1.appendChild(principal);

const principalInput=document.createElement('input');
principalInput.setAttribute('type','number','border');
principalInput.classList.add('col2','div-tabla');
fila1.appendChild(principalInput);
document.querySelector('.fila').style.display = "flex";

// fila2

const fila2=document.createElement('div');
fila2.classList.add('fila2','m-1','justify-content-between')
containerTabla.appendChild(fila2);

const plazo=document.createElement('div');
plazo.classList.add('col1');
plazo.textContent='Plazo en meses:';
plazo.classList.add('text-tabla','m-1')
fila2.appendChild(plazo);

const plazoInput=document.createElement('input');
plazoInput.setAttribute('type', 'number');
plazoInput.classList.add('col2','div-tabla');
fila2.appendChild(plazoInput);

document.querySelector('.fila2').style.display = "flex";


// fila3

const fila3=document.createElement('div');
fila3.classList.add('fila3','m-1','justify-content-between')
containerTabla.appendChild(fila3);

const tasa=document.createElement('div');
tasa.classList.add('col1');
tasa.textContent='Tasa de interés mensual:';
tasa.classList.add('text-tabla','m-1')
fila3.appendChild(tasa);

const tasaInput=document.createElement('input');
tasaInput.setAttribute('type', 'number');
tasaInput.classList.add('col2','div-tabla');
fila3.appendChild(tasaInput);

document.querySelector('.fila3').style.display = "flex";

// fila4 (botones)
const fila4=document.createElement('div');
fila4.classList.add('fila4','justify-content-between')
containerTabla.appendChild(fila4);

const calcular=document.createElement('button');
calcular.classList.add('col1');
calcular.textContent='Calcular';
calcular.classList.add('text-tabla','m-2')
fila4.appendChild(calcular);

const reset=document.createElement('button');
reset.classList.add('col1');
reset.textContent='Reset';
reset.classList.add('text-tabla','m-2')
fila4.appendChild(reset);

document.querySelector('.fila4').style.display = "flex";

// fila5

const fila5=document.createElement('div');
fila5.classList.add('fila5','m-1','justify-content-between')
containerTabla.appendChild(fila5);

const pagoMen=document.createElement('div');
pagoMen.classList.add('col1');
pagoMen.textContent='Pago mensual:';
pagoMen.classList.add('text-tabla','m-1')
fila5.appendChild(pagoMen);

const pagoMenInput=document.createElement('div');
pagoMenInput.setAttribute('type', 'number');
pagoMenInput.classList.add('col2','border','div-tabla','border-dark');
fila5.appendChild(pagoMenInput);

document.querySelector('.fila5').style.display = "flex";

// fila6

const fila6=document.createElement('div');
fila6.classList.add('fila6','m-1','justify-content-between')
containerTabla.appendChild(fila6);

const TotalInt=document.createElement('div');
TotalInt.classList.add('col1');
TotalInt.textContent='Total Interes:';
TotalInt.classList.add('text-tabla','m-1')
fila6.appendChild(TotalInt);

const TotalIntInput=document.createElement('div');
TotalIntInput.setAttribute('type', 'number');
TotalIntInput.classList.add('col2','border','div-tabla','border-dark');
fila6.appendChild(TotalIntInput);

document.querySelector('.fila6').style.display = "flex";


// fila7

const fila7=document.createElement('div');
fila7.classList.add('fila7','justify-content-between','m-1')
containerTabla.appendChild(fila7);

const TotalPago=document.createElement('div');
TotalPago.classList.add('col1');
TotalPago.textContent='Total pagos:';
TotalPago.classList.add('text-tabla','m-1')
fila7.appendChild(TotalPago);

const TotalPagoInput=document.createElement('div');
TotalPagoInput.setAttribute('type', 'number');
TotalPagoInput.classList.add('col2','div-tabla','border','border-dark');
fila7.appendChild(TotalPagoInput);

document.querySelector('.fila7').style.display = "flex";

// Tabla

const lista = document.getElementById('root')
console.log(lista)

//Crear lista

//tabla
const arrayElement = ['Parc','Amort','Interés','Pago',"Saldo"];
//Crear tabla
const table = document.createElement('table');
table.classList.add("table-info","bg-danger","container");
lista.appendChild(table);
//Crear thead
const thead = document.createElement('thead');
table.appendChild(thead);
//Crear tr
const tr = document.createElement('tr');
thead.appendChild(tr);
//Crear th
arrayElement.forEach(item =>{
    const th = document.createElement('th');
    th.classList.add("text-center")
    th.textContent = item;
    tr.appendChild(th);
});



///Creamos tabla body
const tbody = document.createElement('tbody');
table.appendChild(tbody);

// tr del bodytable


// th del tr del body
const arrayMeses = ['1','2','3','4','5','6','7','8','9','10','11','12'];
const arrayData = ['1','2','3','4'];
arrayMeses.forEach(item =>{
    const trb = document.createElement('tr');
    trb.classList.add("text-center")
    tbody.appendChild(trb);

    const thb = document.createElement('th');

    thb.textContent = item;
    trb.appendChild(thb);
    arrayData.forEach(item =>{
        const td = document.createElement('td');
        td.textContent = item;
        trb.appendChild(td);
    })

})
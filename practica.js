const fun = () => {
    console.log('Hola desde aquí');
    return true;
};

const valor = fun();
console.log(valor);

const boton = document.getElementsByClassName('boton')[0];
console.log(boton);

boton.addEventListener('click', fun);

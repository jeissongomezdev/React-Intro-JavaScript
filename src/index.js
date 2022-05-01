const tarea = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
const [nombre, logNombre] = tarea("Goku");
console.log(nombre);
logNombre();

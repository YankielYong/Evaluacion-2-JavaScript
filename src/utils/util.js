export const esValido = (elemento) =>
  elemento !== null && elemento !== undefined;

export function idValido(id) {
  if (id === undefined || id === null) throw new Error('El CI no es valido');
  if (typeof id !== 'string') throw new Error('El CI no es valido');
  if (id.length !== 11) throw new Error('El CI debe tener 11 caracteres');
  const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 11; i++) {
    let c = id.charAt(i);
    if (
      c != '0' &&
      c != '1' &&
      c != '2' &&
      c != '3' &&
      c != '4' &&
      c != '5' &&
      c != '6' &&
      c != '7' &&
      c != '8' &&
      c != '9'
    )
      throw new Error('El CI solo puede tener numeros');
  }
}

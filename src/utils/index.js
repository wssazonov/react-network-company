export function formatDate(dateString) {
  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = dateObj.getMonth().toString().length === 1 ? `0${ dateObj.getMonth() }` : dateObj.getMonth();
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours().toString().length === 1 ? `0${ dateObj.getHours() }` : dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().length === 1 ? `0${ dateObj.getMinutes() }` : dateObj.getMinutes();

  return `${ day }.${ month }.${ year } ${ hours }:${ minutes }`;
}
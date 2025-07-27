export function convertDate(dateStr) {
  let date = new Date(dateStr);

  let options = { day: "numeric", month: "short" };

  // Utilisez "fr-CA" pour le format canadien français ou "en-CA" pour le format canadien anglais.
  return date.toLocaleDateString("fr-CA", options);
}

"use client";

const FormatDate = (dateString: any) => {
  // Créez un nouvel objet Date à partir de la chaîne de date
  const date = new Date(dateString);

  // Formatez la date selon vos besoins
  const options = {
    weekday: "long",
    month: "long", // Affiche le mois en lettres
    year: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // Supprime timeZoneName de vos options
  };

  const dateFormatee = date.toLocaleString("fr-FR");

  return <span>{dateFormatee}</span>;
};

export default FormatDate;

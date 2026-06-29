export const SITE = {
  name: "BAY Gutachten",
  legalName: "BAY Sachverständigenbüro",
  owner: "Niyazi Yildiz",
  street: "Hessenring 7",
  city: "63071 Offenbach am Main",
  addressFull: "Hessenring 7, 63071 Offenbach am Main",
  phoneDisplay: "0178 6825246",
  phoneHref: "tel:+491786825246",
  whatsappNumber: "491786825246",
  whatsappMessage: "Hallo BAY Gutachten, ich hatte einen Schaden und möchte ein Kfz-Gutachten anfragen.",
  email: "bay.hilfe@gmail.com",
  area: "Offenbach & Rhein-Main",
  cities: ["Offenbach", "Frankfurt", "Hanau", "Dreieich", "Mühlheim", "Neu-Isenburg"],
};

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

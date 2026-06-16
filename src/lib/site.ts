export const SITE = {
  name: "BAY Gutachten",
  phoneDisplay: "0178 6825246",
  phoneHref: "tel:+491786825246",
  whatsappNumber: "491786825246",
  whatsappMessage: "Hallo BAY Gutachten, ich möchte ein Kfz-Gutachten anfragen. Bitte kontaktieren Sie mich.",
  email: "kontakt@bay-gutachten.de",
  area: "Offenbach & Rhein-Main",
};

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

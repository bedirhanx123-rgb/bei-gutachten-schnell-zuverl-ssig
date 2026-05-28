export const SITE = {
  name: "BEI Gutachten",
  phoneDisplay: "+49 000 000 00 00",
  phoneHref: "tel:+490000000000",
  whatsappNumber: "490000000000",
  whatsappMessage: "Hallo BEI Gutachten, ich möchte ein Kfz-Gutachten anfragen. Bitte kontaktieren Sie mich.",
  email: "kontakt@bei-gutachten.de",
  area: "Offenbach & Rhein-Main",
};

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

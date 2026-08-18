// Single source of truth for real business details — phone numbers, address,
// class times. Pulled from the current live site; update here if any of it
// changes and every section (nav, hero, footer, sticky bar) stays in sync.

export const SITE = {
  name: "Voice Tech Nepal",
  tagline: "मेरो आवाज, मेरो परिवर्तनको शक्ति",
  taglineEn: "My voice, the power of my change",
  description:
    "A 2-week public speaking and communication bootcamp in Kathmandu — stage confidence, voice projection, storytelling and leadership presence, taught live in Jadibuti and online.",
  phones: ["+977 9761408246", "+977 9816002188"],
  whatsappNumber: "9779761408246",
  email: "voicetech.nepal@gmail.com",
  address: "Kathmandu-32, Jadibuti",
  venue: "Rajmahal Banquet & Café Building, Ground Floor",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rajmahal+Banquet+%26+Cafe+Jadibuti+Kathmandu",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const BOOK_MESSAGE =
  "Hi Voice Tech Nepal, I'd like to book a seat in the next bootcamp. My name is ___, age ___, and I'd prefer the ___ (online/offline) batch.";

export const offlineTimes = [
  "6:30 AM",
  "11:00 AM",
  "2:00 PM",
  "5:00 PM",
];

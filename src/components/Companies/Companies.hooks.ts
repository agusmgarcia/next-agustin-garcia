import cityparking from "#public/assets/company-cityparking.png";
import contaduria from "#public/assets/company-contaduria.png";
import facultad from "#public/assets/company-facultad.png";
import fullstacklabs from "#public/assets/company-fullstacklabs.png";
import mgmresorts from "#public/assets/company-mgmresorts.png";
import novit from "#public/assets/company-novit.png";
import supremegolf from "#public/assets/company-supremegolf.png";
import uruit from "#public/assets/company-uruit.png";

const companies: {
  src: string;
  alt: string;
  title: string;
  url: string;
}[] = [
  {
    src: mgmresorts.src,
    alt: "MGM Resorts logo",
    title: "MGM Resorts",
    url: "https://www.mgmresorts.com/",
  },
  {
    src: fullstacklabs.src,
    alt: "Fullstack Labs logo",
    title: "Fullstack Labs",
    url: "https://www.fullstacklabs.co/",
  },
  {
    src: supremegolf.src,
    alt: "Supreme Golf logo",
    title: "Supreme Golf",
    url: "https://supremegolf.com/",
  },
  {
    src: uruit.src,
    alt: "UruIT logo",
    title: "UruIT",
    url: "https://uruit.com/",
  },
  {
    src: cityparking.src,
    alt: "City Parking logo",
    title: "City Parking",
    url: "https://city-parking.com/",
  },
  {
    src: novit.src,
    alt: "Novit logo",
    title: "Novit",
    url: "https://www.novit.com.ar/",
  },
  {
    src: contaduria.src,
    alt: "Contaduría General de la Provincia de Buenos Aires logo",
    title: "Contaduría General de la Provincia de Buenos Aires",
    url: "https://gba.gob.ar/",
  },
  {
    src: facultad.src,
    alt: "Facultad de informática UNLP logo",
    title: "Facultad de informática UNLP",
    url: "https://www.info.unlp.edu.ar/",
  },
];

export default function useCompanies() {
  return { companies };
}

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
    alt: "MGM Resorts logo",
    src: mgmresorts.src,
    title: "MGM Resorts",
    url: "https://www.mgmresorts.com/",
  },
  {
    alt: "Fullstack Labs logo",
    src: fullstacklabs.src,
    title: "Fullstack Labs",
    url: "https://www.fullstacklabs.co/",
  },
  {
    alt: "Supreme Golf logo",
    src: supremegolf.src,
    title: "Supreme Golf",
    url: "https://supremegolf.com/",
  },
  {
    alt: "UruIT logo",
    src: uruit.src,
    title: "UruIT",
    url: "https://uruit.com/",
  },
  {
    alt: "City Parking logo",
    src: cityparking.src,
    title: "City Parking",
    url: "https://city-parking.com/",
  },
  {
    alt: "Novit logo",
    src: novit.src,
    title: "Novit",
    url: "https://www.novit.com.ar/",
  },
  {
    alt: "Contaduría General de la Provincia de Buenos Aires logo",
    src: contaduria.src,
    title: "Contaduría General de la Provincia de Buenos Aires",
    url: "https://gba.gob.ar/",
  },
  {
    alt: "Facultad de informática UNLP logo",
    src: facultad.src,
    title: "Facultad de informática UNLP",
    url: "https://www.info.unlp.edu.ar/",
  },
];

export default function useCompanies() {
  return { companies };
}

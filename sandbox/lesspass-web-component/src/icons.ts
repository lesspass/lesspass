import {
  library,
  IconName,
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { faBtc } from "@fortawesome/free-brands-svg-icons";
import {
  faHashtag,
  faHeart,
  faHotel,
  faUniversity,
  faPlug,
  faAmbulance,
  faBus,
  faCar,
  faPlane,
  faRocket,
  faShip,
  faSubway,
  faTruck,
  faYenSign,
  faEuroSign,
  faDollarSign,
  faPoundSign,
  faArchive,
  faChartArea,
  faBed,
  faBeer,
  faBell,
  faBinoculars,
  faBirthdayCake,
  faBomb,
  faBriefcase,
  faBug,
  faCamera,
  faCartPlus,
  faCertificate,
  faCoffee,
  faCloud,
  faComment,
  faCube,
  faUtensils,
  faDatabase,
  faGem,
  faExclamationCircle,
  faEye,
  faFlag,
  faFlask,
  faFutbol,
  faGamepad,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHashtag,
  faHeart,
  faHotel,
  faUniversity,
  faPlug,
  faAmbulance,
  faBus,
  faCar,
  faPlane,
  faRocket,
  faShip,
  faSubway,
  faTruck,
  faYenSign,
  faEuroSign,
  faBtc,
  faDollarSign,
  faPoundSign,
  faArchive,
  faChartArea,
  faBed,
  faBeer,
  faBell,
  faBinoculars,
  faBirthdayCake,
  faBomb,
  faBriefcase,
  faBug,
  faCamera,
  faCartPlus,
  faCertificate,
  faCoffee,
  faCloud,
  faCoffee,
  faComment,
  faCube,
  faUtensils,
  faDatabase,
  faGem,
  faExclamationCircle,
  faEye,
  faFlag,
  faFlask,
  faFutbol,
  faGamepad,
  faGraduationCap
);

export function getIconLookup(old_name: FingerprintIcon): IconLookup {
  const incompatible_icon_names: Partial<Record<
    FingerprintIcon,
    IconLookup
  >> = {
    "fa-jpy": { prefix: "fas", iconName: "yen-sign" },
    "fa-eur": { prefix: "fas", iconName: "euro-sign" },
    "fa-usd": { prefix: "fas", iconName: "dollar-sign" },
    "fa-gbp": { prefix: "fas", iconName: "pound-sign" },
    "fa-btc": { prefix: "fab", iconName: "btc" },
    "fa-area-chart": { prefix: "fas", iconName: "chart-area" },
    "fa-cutlery": { prefix: "fas", iconName: "utensils" },
    "fa-diamond": { prefix: "fas", iconName: "gem" },
    "fa-futbol-o": { prefix: "fas", iconName: "futbol" },
  };
  if (Object.keys(incompatible_icon_names).includes(old_name)) {
    return incompatible_icon_names[old_name] as IconLookup;
  }
  const [, ...rest] = old_name.split("-");
  return { prefix: "fas", iconName: rest.join("-") as IconName };
}

export function getIcon(iconName: FingerprintIcon): IconDefinition {
  return findIconDefinition(getIconLookup(iconName));
}

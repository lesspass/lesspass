type Serializable = object | string | boolean;

type Store = {
  getItem(key: string): Serializable | null;
  setItem(key: string, value: Serializable): void;
  removeItem(key: string): void;
};

type MasterPassword = string;

type Settings = {
  saveMasterPassword: boolean;
  useMasterPasswordForAuth: boolean;
  language: string | null;
};

type PasswordProfile = {
  site: string;
  login: string;
  lowercase: boolean;
  uppercase: boolean;
  digits: boolean;
  symbols: boolean;
  length: number;
  counter: number;
};

type LegacyPasswordProfile = {
  id:string;
  site: string;
  login: string;
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
  counter: number;
};

type FingerprintColor =
  | "#000000"
  | "#074750"
  | "#009191"
  | "#FF6CB6"
  | "#FFB5DA"
  | "#490092"
  | "#006CDB"
  | "#B66DFF"
  | "#6DB5FE"
  | "#B5DAFE"
  | "#920000"
  | "#924900"
  | "#DB6D00"
  | "#24FE23";

type FingerprintIcon =
  | "fa-hashtag"
  | "fa-heart"
  | "fa-hotel"
  | "fa-university"
  | "fa-plug"
  | "fa-ambulance"
  | "fa-bus"
  | "fa-car"
  | "fa-plane"
  | "fa-rocket"
  | "fa-ship"
  | "fa-subway"
  | "fa-truck"
  | "fa-jpy"
  | "fa-eur"
  | "fa-btc"
  | "fa-usd"
  | "fa-gbp"
  | "fa-archive"
  | "fa-area-chart"
  | "fa-bed"
  | "fa-beer"
  | "fa-bell"
  | "fa-binoculars"
  | "fa-birthday-cake"
  | "fa-bomb"
  | "fa-briefcase"
  | "fa-bug"
  | "fa-camera"
  | "fa-cart-plus"
  | "fa-certificate"
  | "fa-coffee"
  | "fa-cloud"
  | "fa-comment"
  | "fa-cube"
  | "fa-cutlery"
  | "fa-database"
  | "fa-diamond"
  | "fa-exclamation-circle"
  | "fa-eye"
  | "fa-flag"
  | "fa-flask"
  | "fa-futbol-o"
  | "fa-gamepad"
  | "fa-graduation-cap";

type Finger = {
  icon: FingerprintIcon;
  color: FingerprintColor;
};

type Fingerprint = [Finger, Finger, Finger];

type AccessToken = string;

type SignInRequestPayload = {
  email: string;
  password: string;
};

type SignInResponsePayload = {
  access: AccessToken;
};

type GetPasswordsResponsePayload = {
  results: LegacyPasswordProfile[];
};

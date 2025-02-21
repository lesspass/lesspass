import {
  createFingerprint,
  Fingerprint,
  Finger,
  FingerprintIcon,
  FingerprintColor,
} from "./fingerprint";
import { hmac as createHmac } from "./hmac";

export { createFingerprint, createHmac };

export type { Fingerprint, Finger, FingerprintIcon, FingerprintColor };

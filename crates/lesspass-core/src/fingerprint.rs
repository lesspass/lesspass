use crate::types::CoreError;
use serde::{Deserialize, Serialize};

/// A visual fingerprint composed of three colored icons.
pub type Fingerprint = [Finger; 3];

/// A single finger in the fingerprint: an icon + a color.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Finger {
    pub icon: FingerprintIcon,
    pub color: FingerprintColor,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub enum FingerprintIcon {
    #[serde(rename = "fa-hashtag")]
    FaHashtag,
    #[serde(rename = "fa-heart")]
    FaHeart,
    #[serde(rename = "fa-hotel")]
    FaHotel,
    #[serde(rename = "fa-university")]
    FaUniversity,
    #[serde(rename = "fa-plug")]
    FaPlug,
    #[serde(rename = "fa-ambulance")]
    FaAmbulance,
    #[serde(rename = "fa-bus")]
    FaBus,
    #[serde(rename = "fa-car")]
    FaCar,
    #[serde(rename = "fa-plane")]
    FaPlane,
    #[serde(rename = "fa-rocket")]
    FaRocket,
    #[serde(rename = "fa-ship")]
    FaShip,
    #[serde(rename = "fa-subway")]
    FaSubway,
    #[serde(rename = "fa-truck")]
    FaTruck,
    #[serde(rename = "fa-jpy")]
    FaJpy,
    #[serde(rename = "fa-eur")]
    FaEur,
    #[serde(rename = "fa-btc")]
    FaBtc,
    #[serde(rename = "fa-usd")]
    FaUsd,
    #[serde(rename = "fa-gbp")]
    FaGbp,
    #[serde(rename = "fa-archive")]
    FaArchive,
    #[serde(rename = "fa-area-chart")]
    FaAreaChart,
    #[serde(rename = "fa-bed")]
    FaBed,
    #[serde(rename = "fa-beer")]
    FaBeer,
    #[serde(rename = "fa-bell")]
    FaBell,
    #[serde(rename = "fa-binoculars")]
    FaBinoculars,
    #[serde(rename = "fa-birthday-cake")]
    FaBirthdayCake,
    #[serde(rename = "fa-bomb")]
    FaBomb,
    #[serde(rename = "fa-briefcase")]
    FaBriefcase,
    #[serde(rename = "fa-bug")]
    FaBug,
    #[serde(rename = "fa-camera")]
    FaCamera,
    #[serde(rename = "fa-cart-plus")]
    FaCartPlus,
    #[serde(rename = "fa-certificate")]
    FaCertificate,
    #[serde(rename = "fa-coffee")]
    FaCoffee,
    #[serde(rename = "fa-cloud")]
    FaCloud,
    #[serde(rename = "fa-comment")]
    FaComment,
    #[serde(rename = "fa-cube")]
    FaCube,
    #[serde(rename = "fa-cutlery")]
    FaCutlery,
    #[serde(rename = "fa-database")]
    FaDatabase,
    #[serde(rename = "fa-diamond")]
    FaDiamond,
    #[serde(rename = "fa-exclamation-circle")]
    FaExclamationCircle,
    #[serde(rename = "fa-eye")]
    FaEye,
    #[serde(rename = "fa-flag")]
    FaFlag,
    #[serde(rename = "fa-flask")]
    FaFlask,
    #[serde(rename = "fa-futbol-o")]
    FaFutbolO,
    #[serde(rename = "fa-gamepad")]
    FaGamepad,
    #[serde(rename = "fa-graduation-cap")]
    FaGraduationCap,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub enum FingerprintColor {
    #[serde(rename = "#000000")]
    Black,
    #[serde(rename = "#074750")]
    Teal,
    #[serde(rename = "#009191")]
    Cyan,
    #[serde(rename = "#FF6CB6")]
    Pink,
    #[serde(rename = "#FFB5DA")]
    LightPink,
    #[serde(rename = "#490092")]
    Purple,
    #[serde(rename = "#006CDB")]
    Blue,
    #[serde(rename = "#B66DFF")]
    Lavender,
    #[serde(rename = "#6DB5FE")]
    LightBlue,
    #[serde(rename = "#B5DAFE")]
    PaleBlue,
    #[serde(rename = "#920000")]
    DarkRed,
    #[serde(rename = "#924900")]
    Brown,
    #[serde(rename = "#DB6D00")]
    Orange,
    #[serde(rename = "#24FE23")]
    Green,
}

const FINGERPRINT_ICONS: [FingerprintIcon; 45] = [
    FingerprintIcon::FaHashtag,
    FingerprintIcon::FaHeart,
    FingerprintIcon::FaHotel,
    FingerprintIcon::FaUniversity,
    FingerprintIcon::FaPlug,
    FingerprintIcon::FaAmbulance,
    FingerprintIcon::FaBus,
    FingerprintIcon::FaCar,
    FingerprintIcon::FaPlane,
    FingerprintIcon::FaRocket,
    FingerprintIcon::FaShip,
    FingerprintIcon::FaSubway,
    FingerprintIcon::FaTruck,
    FingerprintIcon::FaJpy,
    FingerprintIcon::FaEur,
    FingerprintIcon::FaBtc,
    FingerprintIcon::FaUsd,
    FingerprintIcon::FaGbp,
    FingerprintIcon::FaArchive,
    FingerprintIcon::FaAreaChart,
    FingerprintIcon::FaBed,
    FingerprintIcon::FaBeer,
    FingerprintIcon::FaBell,
    FingerprintIcon::FaBinoculars,
    FingerprintIcon::FaBirthdayCake,
    FingerprintIcon::FaBomb,
    FingerprintIcon::FaBriefcase,
    FingerprintIcon::FaBug,
    FingerprintIcon::FaCamera,
    FingerprintIcon::FaCartPlus,
    FingerprintIcon::FaCertificate,
    FingerprintIcon::FaCoffee,
    FingerprintIcon::FaCloud,
    FingerprintIcon::FaComment,
    FingerprintIcon::FaCube,
    FingerprintIcon::FaCutlery,
    FingerprintIcon::FaDatabase,
    FingerprintIcon::FaDiamond,
    FingerprintIcon::FaExclamationCircle,
    FingerprintIcon::FaEye,
    FingerprintIcon::FaFlag,
    FingerprintIcon::FaFlask,
    FingerprintIcon::FaFutbolO,
    FingerprintIcon::FaGamepad,
    FingerprintIcon::FaGraduationCap,
];

const FINGERPRINT_COLORS: [FingerprintColor; 14] = [
    FingerprintColor::Black,
    FingerprintColor::Teal,
    FingerprintColor::Cyan,
    FingerprintColor::Pink,
    FingerprintColor::LightPink,
    FingerprintColor::Purple,
    FingerprintColor::Blue,
    FingerprintColor::Lavender,
    FingerprintColor::LightBlue,
    FingerprintColor::PaleBlue,
    FingerprintColor::DarkRed,
    FingerprintColor::Brown,
    FingerprintColor::Orange,
    FingerprintColor::Green,
];

fn hex_substring_to_index(hex_str: &str, len: usize) -> usize {
    let parsed = u64::from_str_radix(hex_str, 16).unwrap_or(0);
    (parsed % len as u64) as usize
}

fn get_color(hex_color: &str) -> FingerprintColor {
    let idx = hex_substring_to_index(hex_color, FINGERPRINT_COLORS.len());
    FINGERPRINT_COLORS[idx].clone()
}

fn get_icon(hex_icon: &str) -> FingerprintIcon {
    let idx = hex_substring_to_index(hex_icon, FINGERPRINT_ICONS.len());
    FINGERPRINT_ICONS[idx].clone()
}

/// Create a 3-piece visual fingerprint from an HMAC-SHA256 hex string.
/// Matches the original LessPass behavior exactly.
pub fn create_fingerprint(hmac_sha256: &str) -> Result<Fingerprint, CoreError> {
    if hmac_sha256.len() < 18 {
        return Err(CoreError::InvalidFingerprintHash {
            actual_len: hmac_sha256.len(),
        });
    }

    let h1 = &hmac_sha256[0..6];
    let h2 = &hmac_sha256[6..12];
    let h3 = &hmac_sha256[12..18];

    Ok([
        Finger {
            color: get_color(h1),
            icon: get_icon(h1),
        },
        Finger {
            color: get_color(h2),
            icon: get_icon(h2),
        },
        Finger {
            color: get_color(h3),
            icon: get_icon(h3),
        },
    ])
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_create_fingerprint_is_deterministic() {
        let fp1 = create_fingerprint(
            "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da",
        ).unwrap();
        let fp2 = create_fingerprint(
            "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da",
        ).unwrap();
        assert_eq!(fp1, fp2);
    }
}

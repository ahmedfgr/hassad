/**
 * ملف توحيد الألوان الرئيسي لموقع حصاد (HSSAD)
 * Single Source of Truth for Brand Colors
 */

export const THEME_COLORS = {
  // اللون الذهبي الرئيسي المشرق لسنبلة القمح
  primary: {
    DEFAULT: "#E5B842",
    hover: "#F0C446",
    light: "#F3D78A",
    soft: "#FEF9EE",
    border: "#F5E4B5",
    dark: "#A87913",
    deep: "#8C6411",
  },
  // ألوان داعمة ومحايدة
  neutral: {
    bgLight: "#FDFDFC",
    cardLight: "#FBFBFA",
    textDark: "#1C1917", // stone-900
    textMuted: "#78716C", // stone-500
    darkFooter: "#0C0A09", // stone-950
  },
} as const;

export default THEME_COLORS;

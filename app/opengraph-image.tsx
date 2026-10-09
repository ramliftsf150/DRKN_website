import { ImageResponse } from "next/og";
export const alt = "DRKN Digital Studio — Built Different. Built Digital.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0b0b0f",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
        backgroundImage:
          "radial-gradient(ellipse at 100% 100%, #703039, transparent 70%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 35,
          letterSpacing: -2,
          fontWeight: 800,
        }}
      >
        DRKN<span style={{ color: "#ff6b35" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 78,
          lineHeight: 1.1,
          letterSpacing: -4,
          marginTop: 55,
        }}
      >
        Your Vision. Our Code.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 78,
          lineHeight: 1.1,
          letterSpacing: -4,
          color: "#ff9b6b",
        }}
      >
        Limitless Possibilities.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 20,
          color: "#b9adb9",
          marginTop: 45,
          letterSpacing: 3,
        }}
      >
        BUILT DIFFERENT. BUILT DIGITAL.
      </div>
    </div>,
    size,
  );
}

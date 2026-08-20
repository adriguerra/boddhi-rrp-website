import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogImageAlt =
  "BODDHI RRP® — Beat the prognosis. Accelerate return.";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

export async function createOgImage() {
  const [heroBytes, logoBytes, fontBytes] = await Promise.all([
    readFile(join(process.cwd(), "public/assets/acupuncture.png")),
    readFile(join(process.cwd(), "public/assets/logo-white.png")),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-800-normal.woff",
    ).then((res) => res.arrayBuffer()),
  ]);

  const heroSrc = `data:image/png;base64,${heroBytes.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logoBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0A1F20",
          overflow: "hidden",
          fontFamily: '"Plus Jakarta Sans"',
        }}
      >
        <img
          src={heroSrc}
          alt=""
          width={780}
          height={1040}
          style={{
            position: "absolute",
            top: "-18%",
            right: "-6%",
            width: "62%",
            height: "136%",
            objectFit: "cover",
            objectPosition: "center 32%",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(10,31,32,0.96) 0%, rgba(10,31,32,0.88) 38%, rgba(10,31,32,0.35) 62%, rgba(10,31,32,0.55) 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "58%",
            height: "100%",
            padding: "56px 48px 56px 64px",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={220}
            height={56}
            style={{
              width: 220,
              height: 56,
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FF6A13",
              }}
            >
              Rapid Repair Protocol
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#F5F2EB",
                letterSpacing: "-0.02em",
              }}
            >
              <span>Beat the prognosis.</span>
              <span style={{ color: "#8DC8CE" }}>Accelerate return.</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 800,
                lineHeight: 1.35,
                color: "rgba(245,242,235,0.78)",
                maxWidth: 520,
              }}
            >
              We repair, without surgery, in days not months.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 800,
              color: "rgba(245,242,235,0.62)",
            }}
          >
            Boddhi Clinic · Geneva
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: fontBytes,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}

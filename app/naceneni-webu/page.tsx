import type { Metadata } from "next"
import { Nav } from "@/components/v2/Nav"
import { Footer } from "@/components/v2/Footer"
import { EmbeddedForm } from "./embedded-form"

export const metadata: Metadata = {
  title: "Nacenění webu — ECC Digital",
  description:
    "Vyplňte krátký dotazník a připravíme vám konkrétní cenovou nabídku i termín na míru. Nezávazně a zdarma.",
}

const reasons = [
  { t: "Přesná cena", d: "Cenu počítáme podle reálného rozsahu, ne od oka. Žádná překvapení v průběhu." },
  { t: "Termín na míru", d: "Z odpovědí odhadneme realistický termín dodání právě pro váš projekt." },
  { t: "Bez dohadování", d: "Připravíme nabídku, kterou pak jen společně doladíme. Ušetříme čas oběma stranám." },
]

const steps = [
  { n: "1", t: "Vyplníte dotazník", d: "Pár minut, povinné jen to nejnutnější." },
  { n: "2", t: "Připravíme nacenění", d: "Cenu a termín pošleme e-mailem." },
  { n: "3", t: "Probereme detaily", d: "Na krátké schůzce nebo po telefonu." },
]

export default function NaceneniWebuPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0e18", color: "#fff" }}>
      <Nav />

      <section
        style={{ maxWidth: 1000, margin: "0 auto", padding: "160px 20px 80px" }}
      >
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 600,
              color: "#fdba74",
              background: "rgba(249,115,22,0.12)",
              border: "1px solid rgba(249,115,22,0.25)",
              padding: "5px 14px",
              borderRadius: 999,
              marginBottom: 18,
            }}
          >
            Nezávazně a zdarma
          </span>
          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 44px)",
              lineHeight: 1.12,
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            Spočítáme cenu vašeho webu na míru
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Každý web je jiný, proto neuvádíme paušální ceník. Vyplňte krátký dotazník a my vám
            připravíme <strong style={{ color: "#fff" }}>konkrétní cenovou nabídku i termín</strong> –
            ozveme se do dvou pracovních dnů.
          </p>
        </div>

        {/* Reasons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.t}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "22px 24px",
              }}
            >
              <h3 style={{ margin: "0 0 6px", fontSize: 16, color: "#fdba74" }}>{r.t}</h3>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                {r.d}
              </p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            padding: "30px 28px",
            marginBottom: 40,
          }}
        >
          {steps.map((s) => (
            <div key={s.n}>
              <span
                style={{
                  display: "inline-flex",
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "#f97316",
                  color: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                {s.n}
              </span>
              <strong style={{ display: "block", marginBottom: 4 }}>{s.t}</strong>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{s.d}</span>
            </div>
          ))}
        </div>

        {/* Form embed */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          <EmbeddedForm />
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: 14, marginTop: 26 }}>
          Raději si zavolat?{" "}
          <a href="mailto:admin@eccdigital.cz" style={{ color: "#fdba74", fontWeight: 600 }}>
            admin@eccdigital.cz
          </a>
        </p>
      </section>

      <Footer />
    </main>
  )
}

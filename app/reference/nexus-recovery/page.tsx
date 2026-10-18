import type { Metadata } from "next"
import { Nav } from "@/components/v2/Nav"
import { Footer } from "@/components/v2/Footer"
import { LeadModal } from "@/components/v2/LeadModal"
import { CookieBar } from "@/components/v2/CookieBar"
import { FloatingActions } from "@/components/v2/FloatingActions"
import { ArrowRight } from "@/components/v2/shared"

const URL = "https://eccdigital.cz/reference/nexus-recovery/"
const IMG = "/images/reference/nexus-recovery"

export const metadata: Metadata = {
  title: "Web s rezervačním systémem pro wellness: případovka Nexus Recovery",
  description:
    "Jak jsme pro privátní wellness Nexus Recovery v Plzni postavili web, online rezervace, poukazy a vstup na PIN. Zákazník si zónu zarezervuje i otevře sám.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Nexus Recovery: wellness s online rezervací a vstupem na PIN",
    description:
      "Privátní wellness v Plzni, kam se rezervuje online a vstupuje kódem z e-mailu. Případová studie ECC Digital.",
    url: URL,
    type: "article",
    images: [{ url: `https://eccdigital.cz${IMG}/privatni-wellness-plzen-nexus.webp`, width: 1600, height: 1064 }],
  },
}

const FAQ = [
  {
    q: "Potřebuje privátní wellness recepci, když má online rezervace?",
    a: "U Nexus Recovery ne pro samotný vstup. Zákazník zaplatí online, v potvrzovacím e-mailu dostane PIN a zónu si otevře sám. Recepce řeší jen dotazy a poukazy, na které má vlastní návod.",
  },
  {
    q: "Jak dlouho trvá spustit web s rezervacemi pro menší provozovnu?",
    a: "Záleží hlavně na podkladech: fotkách, cenách a podmínkách. U Nexus Recovery jsme web, rezervace a vstupní systém připravovali souběžně s focením interiéru a dolaďovali podle toho, jak klient potvrzoval ceny a provozní detaily.",
  },
  {
    q: "Dá se napojit rezervační systém, který už provozovna používá?",
    a: "Ano. Nexus Recovery měl účet v rezervačním systému Reenio, takže jsme ho napojili na nový web místo budování druhého systému vedle něj. Zákazník vybírá na webu, termín a platbu řeší ověřený nástroj.",
  },
  {
    q: "Prodává web i dárkové poukazy?",
    a: "Ano. Poukaz si zákazník koupí na webu, dostane ho digitálně nebo v tištěné podobě a obdarovaný zadá jeho kód přímo v rezervaci.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: "Nexus Recovery: wellness s online rezervací a vstupem na PIN",
      description: metadata.description,
      inLanguage: "cs-CZ",
      datePublished: "2026-10-18",
      image: `https://eccdigital.cz${IMG}/privatni-wellness-plzen-nexus.webp`,
      author: { "@id": "https://eccdigital.cz/#organization" },
      publisher: { "@id": "https://eccdigital.cz/#organization" },
      mainEntityOfPage: URL,
      about: {
        "@type": "HealthAndBeautyBusiness",
        name: "NEXUS Recovery & Spa",
        url: "https://nexusrecovery.cz",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Skrétova 475/8",
          addressLocality: "Plzeň",
          addressCountry: "CZ",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ECC Digital", item: "https://eccdigital.cz/" },
        { "@type": "ListItem", position: 2, name: "Reference", item: "https://eccdigital.cz/#reference" },
        { "@type": "ListItem", position: 3, name: "Nexus Recovery", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

function Shot({
  src,
  alt,
  caption,
  w,
  h,
  phone,
}: {
  src: string
  alt: string
  caption: string
  w: number
  h: number
  phone?: boolean
}) {
  return (
    <figure className={`cs-shot${phone ? " cs-shot--phone" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${IMG}/${src}`} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default function NexusRecoveryPage() {
  return (
    <>
      <Nav />
      <main className="blog-article-page">
        <article className="light light--first">
          <header className="article-hero">
            <div className="container article-hero-inner">
              <a className="article-back" href="/#reference">
                ← Všechny reference
              </a>
              <div className="article-cat">Reference · Wellness</div>
              <h1 className="article-title">Nexus Recovery: wellness s online rezervací a vstupem na PIN</h1>
              <div className="article-meta">
                <span>Plzeň</span>
                <span className="dot-sep" />
                <span>Web, rezervace, poukazy, vstupní systém, focení</span>
                <span className="dot-sep" />
                <span>5 min čtení</span>
              </div>
            </div>
          </header>

          <div className="article-image-wrap">
            <div className="container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="article-image"
                src={`${IMG}/privatni-wellness-plzen-nexus.webp`}
                alt="Privátní wellness Nexus Recovery v Plzni — odpočívárna, sauna a sprcha"
                width={1600}
                height={1064}
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="container">
            <div className="blog-prose">
              <blockquote className="cs-lead">
                <p>
                  Zákazník si zónu najde, zarezervuje, zaplatí a nakonec si sám otevře dveře. Bez telefonátu,
                  bez čekání na recepci. Přesně takový provoz si Nexus Recovery přál a takový web jsme mu postavili.
                </p>
              </blockquote>

              <h2>Kdo je Nexus Recovery a co potřeboval</h2>
              <p>
                NEXUS Recovery &amp; Spa je privátní wellness v Plzni. Sedmdesát metrů čtverečních se saunou,
                hydromasážní vanou a červeným světlem MITO LIGHT, které si vždy pronajímá jen jedna skupina.
                Nikdo cizí, žádné sdílené lehátko.
              </p>
              <p>
                Takový koncept stojí na tom, že funguje sám. Kdyby měl zákazník volat kvůli termínu a pak čekat,
                až mu někdo odemkne, ztrácí privátní zóna to hlavní. Klient proto potřeboval víc než vizitku. Chtěl
                kompletní cestu od první návštěvy webu až po dveře. Přesně to je{" "}
                <a href="/web-s-rezervacnim-systemem/">web s rezervačním systémem</a>, jak ho stavíme pro provozy, které prodávají čas.
              </p>

              <h2>Web, který prodává zážitek</h2>
              <p>
                Wellness se vybírá očima. Proto jsme začali oficiálním focením interiéru: 41 snímků, ze kterých
                stojí celý web. Žádné fotobanky. Návštěvník vidí přesně ten prostor, do kterého přijde.
              </p>
              <Shot
                src="web-nexus-recovery-uvodni-stranka.webp"
                alt="Úvodní stránka webu Nexus Recovery s online rezervací wellness v Plzni"
                caption="Úvodní stránka nexusrecovery.cz — fotka zóny, jedna věta o tom, co čeká, a tlačítko rezervace."
                w={1440}
                h={900}
              />
              <p>
                Většina lidí přijde z telefonu, často těsně před rozhodnutím. Mobilní verze má proto rezervaci
                a telefon stále po ruce ve spodní liště. Cenu člověk vidí hned, bez proklikávání.
              </p>
              <div className="cs-duo">
                <Shot
                  src="web-nexus-recovery-mobil.webp"
                  alt="Mobilní verze webu privátního wellness s lištou pro rezervaci"
                  caption="Na telefonu je rezervace vždy na dosah palce."
                  w={600}
                  h={1298}
                  phone
                />
                <figure className="cs-shot cs-shot--photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/virivka-privatni-wellness-plzen.webp`}
                    alt="Hydromasážní vana v privátním wellness Nexus Recovery Plzeň"
                    width={1200}
                    height={798}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Z oficiálního focení — hydromasážní vana.</figcaption>
                </figure>
              </div>

              <h2>Online rezervace bez telefonování</h2>
              <p>
                Na webu si zákazník vybere délku pobytu od jedné do tří hodin a počet osob. Termín a platbu pak
                řeší rezervační systém Reenio, který už klient používal. Místo druhého systému vedle prvního jsme
                ten stávající napojili tak, aby působil jako součást webu.
              </p>
              <Shot
                src="online-rezervace-wellness-vyber-delky.webp"
                alt="Online rezervace wellness — výběr délky bloku a cena za celou zónu"
                caption="Výběr délky bloku. Cena je za celou zónu, souhrn se přepočítá okamžitě."
                w={1440}
                h={900}
              />
              <p>Při nastavování nabídky jsme hlídali i obchodní logiku, nejen vzhled:</p>
              <ul>
                <li>
                  <strong>Delší pobyt se vyplatí.</strong> Hodina vyjde na 1 390 Kč, ve tříhodinovém bloku je to
                  983 Kč za hodinu. Ceník jsme seřadili tak, aby sazba s délkou klesala bez výjimky.
                </li>
                <li>
                  <strong>Úklid se nepočítá do času zákazníka.</strong> Mezi termíny je čtvrthodina na přípravu
                  zóny, ale v kalendáři ji zákazník nevidí.
                </li>
                <li>
                  <strong>Doplňky rovnou do rezervace.</strong> Nápoje si zákazník přidá ke svému termínu, ne až
                  na místě.
                </li>
                <li>
                  <strong>Dárkové poukazy.</strong> Digitální i tištěné. Obdarovaný zadá kód v rezervaci a cena se
                  sníží o hodnotu poukazu.
                </li>
              </ul>

              <aside className="cs-tip">
                <p>
                  <strong>💡 Řešíte podobný provoz?</strong> Saunu, studio, salon nebo cokoli, kde se rezervuje
                  čas? Nejdřív se podíváme na váš web a rezervace a řekneme vám, kde zákazníci odpadají.{" "}
                  <a href="#" data-lead="audit">
                    Začněte auditem zdarma
                  </a>
                  .
                </p>
              </aside>

              <h2>Dveře se otevřou kódem z e-mailu</h2>
              <p>
                Po zaplacení přijde potvrzovací e-mail s PIN kódem. Platí přesně po dobu rezervace a zákazník ho
                zadá na klávesnici u dveří. Nikdo na něj nemusí čekat a nikdo nemusí předávat klíče.
              </p>
              <div className="cs-duo cs-duo--reverse">
                <Shot
                  src="vstup-na-pin-wellness-mobil.webp"
                  alt="Stránka se vstupním PIN kódem do privátního wellness na mobilu"
                  caption="Stránka s PINem. Ukázka s vymyšleným kódem."
                  w={600}
                  h={1298}
                  phone
                />
                <div className="cs-duo-text">
                  <p>
                    Stránku s kódem jsme navrhli pro chvíli, kdy člověk stojí u dveří s taškou v ruce. PIN je proto
                    to největší na obrazovce a pod ním je jen to nejnutnější: adresa a kudy jít.
                  </p>
                  <p>
                    Vchod vede přes fitness centrum ve stejné budově, takže jsme cestu natočili na video. Kdo
                    přijde poprvé, nebloudí.
                  </p>
                  <p>
                    PIN je v e-mailu i jako prostý text, ne jen v grafice. Přečte ho každý poštovní program,
                    i ten, který obrázky blokuje.
                  </p>
                </div>
              </div>

              <h2>Zákulisí, které zákazník nevidí</h2>
              <p>
                Bezobslužný provoz funguje jen tehdy, když jsou vyřešené i věci kolem. Proto jsme pro Nexus
                Recovery připravili:
              </p>
              <ul>
                <li>
                  <strong>Návod pro recepci.</strong> Jak rezervace a poukazy fungují a co dělat, když se zákazník
                  ozve.
                </li>
                <li>
                  <strong>Obchodní podmínky a ochranu osobních údajů</strong> sladěné s tím, jak rezervace a vstup
                  skutečně fungují.
                </li>
                <li>
                  <strong>Web bez zbytečných cookies.</strong> Mapa se načítá jako obrázek, ne jako vložená služba
                  třetí strany. Návštěvnost měříme až se souhlasem.
                </li>
                <li>
                  <strong>Hlídání provozu.</strong> Když něco přestane fungovat, víme o tom dřív než zákazník.
                </li>
              </ul>
              <div className="cs-duo cs-duo--photos">
                <figure className="cs-shot cs-shot--photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/sauna-privatni-wellness-plzen.webp`}
                    alt="Sauna v privátním wellness Nexus Recovery v Plzni"
                    width={1200}
                    height={798}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Sauna</figcaption>
                </figure>
                <figure className="cs-shot cs-shot--photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/mito-light-cervene-svetlo-plzen.webp`}
                    alt="Terapie červeným světlem MITO LIGHT v privátním wellness Plzeň"
                    width={1200}
                    height={798}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Červené světlo MITO LIGHT</figcaption>
                </figure>
              </div>

              <h2>Projekt v kostce</h2>
              <div className="cs-facts">
                <dl>
                  <div>
                    <dt>Klient</dt>
                    <dd>
                      NEXUS Recovery &amp; Spa, privátní wellness v Plzni (
                      <a href="https://nexusrecovery.cz" target="_blank" rel="noopener">
                        nexusrecovery.cz
                      </a>
                      )
                    </dd>
                  </div>
                  <div>
                    <dt>Obor</dt>
                    <dd>Wellness a regenerace, rezervace na čas</dd>
                  </div>
                  <div>
                    <dt>Rozsah</dt>
                    <dd>
                      Design a web, online rezervace, dárkové poukazy, vstup na PIN, potvrzovací e-mail, focení
                      interiéru, návod pro recepci, právní texty, monitoring
                    </dd>
                  </div>
                  <div>
                    <dt>Nabídka na webu</dt>
                    <dd>5 délek pobytu od 1 do 3 hodin, cena za celou zónu, doplňky k rezervaci</dd>
                  </div>
                  <div>
                    <dt>Fotografie</dt>
                    <dd>41 snímků z oficiálního focení, bez fotobank</dd>
                  </div>
                  <div>
                    <dt>Start projektu</dt>
                    <dd>Srpen 2026</dd>
                  </div>
                </dl>
              </div>

              <h2>Časté otázky</h2>
              <div className="cs-faq">
                {FAQ.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>

              <h2>Co to znamená pro vás</h2>
              <p>
                Provozujete saunu, wellness, studio nebo salon a rezervace vám dnes chodí po telefonu? S tímhle
                vám umíme pomoct:
              </p>
              <ul>
                <li>
                  <strong>Web, který prodává.</strong> Postavený na vašich fotkách a ceně, kterou zákazník vidí hned.
                </li>
                <li>
                  <strong>Rezervace a platby online.</strong> Napojené na systém, který už používáte, nebo na nový.
                </li>
                <li>
                  <strong>Provoz bez čekání.</strong> Vstup kódem, poukazy, potvrzovací e-maily a podklady pro
                  personál.
                </li>
              </ul>
              <div className="cs-cta">
                <a href="#" data-lead="audit" className="btn-primary">
                  Audit zdarma <ArrowRight size={18} />
                </a>
                <a href="/naceneni-webu/" className="btn-ghost cs-btn-ghost">
                  Nacenit web
                </a>
              </div>

              <h2>Další reference</h2>
              <p>
                Podívejte se i na <a href="/#reference">další projekty v referencích</a>: weby a kampaně pro
                Klimahome, Marksys nebo Floreu.
              </p>

              <p className="cs-closing">
                Chcete probrat svůj projekt? Zavolejte Ing. Petru Štěpánovi na{" "}
                <a href="tel:+420724443968">+420 724 443 968</a> nebo napište na{" "}
                <a href="mailto:admin@eccdigital.cz">admin@eccdigital.cz</a>.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <LeadModal />
      <FloatingActions />
      <CookieBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}

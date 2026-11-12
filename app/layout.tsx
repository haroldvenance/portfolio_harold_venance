import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/components/Preferences";

export const metadata: Metadata = {
  title: "MBOUMBA-DZUCHEU Harold | Ingénieur logiciel — Data/IA · Sécurité applicative · Blockchain",
  description:
    "Portfolio de MBOUMBA-DZUCHEU Harold, ingénieur logiciel : systèmes intelligents, sécurisés et évolutifs en Data/IA, sécurité applicative et blockchain.",
  openGraph: {
    title: "MBOUMBA-DZUCHEU Harold | Ingénieur logiciel",
    description: "Portfolio de MBOUMBA-DZUCHEU Harold, ingénieur logiciel spécialisé en Data/IA, Sécurité et Blockchain.",
    url: "https://haroldvenance.com", // Remplace par ton vrai domaine
    siteName: "Harold Venance Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ajoute une image de 1200x630 dans /public
        width: 1200,
        height: 630,
        alt: "MBOUMBA-DZUCHEU Harold - Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBOUMBA-DZUCHEU Harold | Ingénieur logiciel",
    description: "Portfolio de MBOUMBA-DZUCHEU Harold, ingénieur logiciel spécialisé en Data/IA, Sécurité et Blockchain.",
    images: ["/og-image.jpg"],
  },
};

const initPreferences = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('hv-theme');var l=localStorage.getItem('hv-lang');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}if(l!=='fr'&&l!=='en'){l=((navigator.language||'fr')+'').toLowerCase().indexOf('fr')===0?'fr':'en'}d.setAttribute('data-theme',t);d.setAttribute('lang',l);d.style.colorScheme=t}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
        <script dangerouslySetInnerHTML={{ __html: initPreferences }} />
      </head>
      <body>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
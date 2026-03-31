import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { navigation, siteMeta } from "@/data/site-content";

export const metadata = {
  metadataBase: new URL("https://asivuke.local"),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.brand}`,
  },
  description: siteMeta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell">
          <SiteHeader navigation={navigation} />
          {children}
          <SiteFooter navigation={navigation} />
        </div>
      </body>
    </html>
  );
}

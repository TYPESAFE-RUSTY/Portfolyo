import LenisProvider from "@/wrappers/LenisProvider";
import Script from "next/script";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/* Required js files */}
        <Script src="js/vendor/jquery-1.12.4.min.js" defer />
        <Script src="js/vendor/popper.min.js" defer />
        <Script src="js/vendor/bootstrap.min.js" defer />
        <Script src="js/vendor/scrollit.js" defer />
        <Script src="js/vendor/jquery.waypoints.min.js" defer />
        <Script src="js/vendor/imagesloaded.pkgd.min.js" defer />
        <Script src="js/vendor/venobox.min.js" defer />
        <Script src="js/vendor/jquery.isotope.v3.0.2.js" defer />
        <Script src="js/vendor/owl.carousel.min.js" defer />
        <Script src="js/vendor/typed.min.js" defer />
        <Script src="js/vendor/bootstrap-menu.js" defer />
        <Script src="js/vendor/wow.min.js" defer />
        <Script src="js/main.js" defer />

        {/* Actual Content */}
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

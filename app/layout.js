import "./globals.css";

export const metadata = {
  title: "Jace Cabrera",
  description: "WIP site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

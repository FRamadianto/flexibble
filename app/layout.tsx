import "./global.css";

export const metadata = {
  title: "Flexibble",
  description: "Showcase your projects with Flexibble",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}

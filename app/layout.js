import "bootstrap/dist/css/bootstrap.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary">{children}</body>
    </html>
  );
}

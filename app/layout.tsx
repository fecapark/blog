import "../styles/variables.css";
import "../styles/globals.css";
import RecoilMiddleware from "@/components/middlewares/RecoilMiddleware";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <RecoilMiddleware>{children}</RecoilMiddleware>
      </body>
    </html>
  );
}

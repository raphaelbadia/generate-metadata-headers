import { headers } from "next/headers";

export async function generateMetadata() {
  const host = headers().get("host");
  return {
    title: `Title ${host}`,
    description: `This is the description for ${host}`,
  };
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}

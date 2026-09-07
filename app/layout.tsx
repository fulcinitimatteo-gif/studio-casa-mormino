import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Studio Casa Mormino | Amministrazione condominiale', description: 'Studio Casa Mormino della Dott.ssa Rossella Mormino. Amministrazione condominiale, gestione contabile e cura delle parti comuni. Contatta lo studio.', robots: {index: false, follow: false} };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="it"><body>{children}</body></html>; }

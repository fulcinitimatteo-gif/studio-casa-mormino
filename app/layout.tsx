import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase: new URL('https://studiocasamormino.it'),
 title: 'Amministratore condominiale Bergamo | Studio Casa Mormino',
 description: 'Amministrazione condominiale a Bergamo e provincia. Studio Casa Mormino a Scanzorosciate: contabilità, manutenzione, assemblee e comunicazioni. Contatta Rossella Mormino.',
 robots: {index:true,follow:true},
 openGraph: {type:'website',locale:'it_IT',siteName:'Studio Casa Mormino',title:'Studio Casa Mormino | Amministrazione condominiale a Bergamo',description:'Contabilità, manutenzione e assemblee per i condomìni di Bergamo e provincia. Studio a Scanzorosciate.',images:[{url:'/condominio.jpg',width:1200,height:1500,alt:'Studio Casa Mormino — amministrazione condominiale a Bergamo e provincia'}]},
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="it"><body>{children}</body></html>; }

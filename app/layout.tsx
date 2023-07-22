import Navbar from '@/components/NavBar/Navbar'
import '@/styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

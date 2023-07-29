import './globals.css'
import styles from './layout.module.css'

import Header from './_parts/header/header.js'
import Main from './_parts/main/main.js'
import Footer from './_parts/footer/footer.js'


export const metadata = {
  title: 'NETALLIANCE | Inspire & Succeed',
  description: 'Created by Julian Chahine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <script src="https://www.netalliance.eu/assets/js/smartsupp.js" defer></script>
      </head>
      <body>

        <Header />

        <Main content={children} />

        <Footer />

      </body>
    </html>
  )
}

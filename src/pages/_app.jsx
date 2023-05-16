import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs'
import { useRouter } from 'next/router'

import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isPublicPath = ['/'].includes(pathname)
  return (
    <ClerkProvider {...pageProps}>
      {isPublicPath && <Component {...pageProps} />}

      {!isPublicPath && (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  )
}

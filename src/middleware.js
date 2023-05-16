import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default withClerkMiddleware((req) => {
  return NextResponse.next()
})

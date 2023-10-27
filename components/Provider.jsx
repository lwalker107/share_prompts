// Higher Order Component that we will be using to wrap other components in
'use client';

import React from 'react'

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider

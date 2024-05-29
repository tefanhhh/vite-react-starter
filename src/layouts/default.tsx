import React, { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default DefaultLayout

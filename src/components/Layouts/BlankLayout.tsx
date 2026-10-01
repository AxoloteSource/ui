import { PropsWithChildren } from 'react'

const BlankLayout = ({ children }: PropsWithChildren) => {
  return <div className="dark:text-white-dark min-h-screen text-black">{children}</div>
}

export default BlankLayout

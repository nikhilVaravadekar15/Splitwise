
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Splitwise | Sign In",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

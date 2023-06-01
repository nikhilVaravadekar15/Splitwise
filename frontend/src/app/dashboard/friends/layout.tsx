import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Splitwise | Friends",
};

export default function DashboardLayout({
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

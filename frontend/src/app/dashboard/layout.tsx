"use client"
import { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="w-full h-full max-w-[16rem]">
          <Sidebar />
        </div>
        <div className="h-screen flex flex-col overflow-hidden w-[calc(100vw-15rem)]">
          {children}
        </div>
      </div>
    </>
  )
}

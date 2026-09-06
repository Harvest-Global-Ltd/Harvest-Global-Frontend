import Navbar from "@/components/Navbar"
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="text-white mx-auto ">{children}</div>
    </>
  );
}

export default layout
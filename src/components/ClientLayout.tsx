"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContact, setShowContact] = useState(false);
console.log("ClientLayout render, showContact =", showContact);


  return (
    <>
      <Navbar
        onContactClick={() => {
          console.log("Navbar contact button triggered");
          setShowContact(true);
        }}
      />
      <Contact
        open={showContact}
        onClose={() => {
          console.log("Contact closed");
          setShowContact(false);
        }}
      />
      {children}
      
    </>
  );
  
}
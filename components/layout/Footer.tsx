import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-8 text-center text-sm font-light border-t border-zinc-900">
      <p>© {new Date().getFullYear()} DriveAI. All rights reserved.</p>
    </footer>
  );
};

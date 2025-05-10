"use client";

import React from "react";
import useLocoScroll from "@/hooks/useLocoScroll";

const LocoWrapper = ({ children }: { children: React.ReactNode }) => {
  useLocoScroll();

  return (
    <div data-scroll-container>
      {children}
    </div>
  );
};

export default LocoWrapper;

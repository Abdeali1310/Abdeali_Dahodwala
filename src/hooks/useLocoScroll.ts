"use client"
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocoScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");
    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smoothMobile: true,
      lerp: 0.08,
      multiplier: 1,
    });

    return () => scroll.destroy();
  }, []);
}

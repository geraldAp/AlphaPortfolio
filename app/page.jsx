'use client';
import { useLayoutEffect } from "react";
import HeroSection from "../components/HeroSection";
import gsap from "gsap";

export default function Home() {

  useLayoutEffect(() => {

    let tl = gsap.timeline();
    let screenSize = gsap.matchMedia();

    let context = gsap.context(() => {
      //FOR DESKTOP SCREENS
      screenSize.add("(min-width:1000px)", () => {
          tl.fromTo(".loading", {y:0, opacity:1, duration:1}, {y:50, opacity:0, duration:1}, 1.2)
          tl.to(".alpha", {y:0, duration:1, ease:"power2.out", stagger: {
            amount:.4
          }})
          tl.to(".text-wrapper", {duration:1, fontSize:"1rem", gap:5, top:"10%", left:"12%", ease:"power2.inOut"})
          tl.set(".text-wrapper", {display:"none",})
          tl.fromTo(".main-alpha, .show", {visibility:"hidden"}, {visibility:"visible"})
          tl.to(".preload-container", {display:"none"},"-=1")
          tl.fromTo(".overlay", {display:"block", backgroundColor:"black"}, {display:"none", zIndex:-100}, "<")
          tl.fromTo(".hero", {y:100, opacity:0}, {y:0, duration:1, opacity:1, ease:"power2.out", stagger:{
            amount:0.3
          }}, "<.25");
      })


      //FOR SMALLER SCREENS
      screenSize.add("(max-width:999px)", () => {
          tl.fromTo(".hero", {y:100, opacity:0}, {y:0, opacity:1, duration:1, ease:"power2.out", stagger: {
            amount:0.3
          }});
      })
    });

    return () => {
      context.revert();
    }
  },[]);

  return (
    <main className="w-screen h-screen bg-primary-color text-white">
      <div className="w-full h-full overflow-x-hidden">
        <HeroSection heroAnimation="hero"/>
      </div>

      {/*-----PRELOAD ANIMATION-------*/}
      <div className="w-full h-full bg-black hidden lg:flex justify-center items-center absolute top-0 left-0 overflow-hidden preload-container">
        <div className="w-auto h-auto mx-auto text-9xl absolute bottom-0 left-[35%] hidden lg:flex gap-2 text-wrapper z-[200]">
            <div className="alpha translate-y-[500px]">#</div>
            <div className="alpha translate-y-[500px]">A</div>
            <div className="alpha translate-y-[500px]">L</div>
            <div className="alpha translate-y-[500px]">P</div>
            <div className="alpha translate-y-[500px]">H</div>
            <div className="alpha translate-y-[500px]">A</div>
        </div>
        <h1 className="text-base lg:text-2xl loading">DIVE INTO MY WORLD OF PIXELS...</h1>
      </div>
    </main>
  )
}

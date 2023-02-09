"use client";
import { Navigator } from "@/components";
import { Routes } from "@/models";
//import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import Mustachy from "../public/images/mostacho.png";
import { mostachoBlur } from "./models";
//import Script from "next/script";
//import dynamic from "next/dynamic";

//const Card = lazy(() => import("../components/Card/Card"));
// const Card = dynamic(() => import("../components/Card/Card"));

// recomendado usar lazy

const App = () => {
  return (
    <Suspense fallback={<>Cargando</>}>
      {/* tipos de strategys en script: afterInteractive, lazyOnload, worker */}
      {/* <Script
        src="https//example.com/script.js"
        strategy="beforeInteractive"
      /> */}
      {/* onLoad={() => {}} ,onError, onReady */}
      {/* <Script
        onError={() => console.log("error")}
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('root).style.height= '#f0f0f0'`,
        }}
      /> */}
      {/* mal<Script>{`document.getElementById('root).style.height= '100vh'`}</Script> */}
      <div style={{ position: "relative" }}>
        <h1>Welcome to Rick and Morty app</h1>
        <h2>What do you want to see?</h2>
        {/* <Link href={Routes.CHARACTERS}>Characters</Link>
      <Link href={Routes.LOCATIONS}>Locations</Link> */}
        {/* <Card /> */}
        <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
        <Image
          alt="Image"
          src={Mustachy}
          blurDataURL={mostachoBlur}
          placeholder="blur"
          priority
        />
        {/* fill ocupa todo el contenido, padre position relative y block inline */}
      </div>
    </Suspense>
  );
};

export default App;

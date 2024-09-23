"use client";

import React from "react";
import MainFile from "./MainFile";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <MainFile/>
    </>
  );
};

export default Page;

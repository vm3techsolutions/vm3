import React from "react";
import Checkout from "./checkout";
import PageTitle from "./pageTitle";

export default function Page() {
  return (
    <div>
      <PageTitle />
      <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Checkout />
      </div>
    </div>
  );
}
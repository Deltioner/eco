import React from "react";
import Hero from "./_components/Hero";
import Products from "./_components/Products";

import { ClerkProvider } from "@clerk/nextjs";

/**
 * The root page of the application.
 *
 * This component is rendered server-side and client-side.
 *
 * It renders a gradient background, a hero component, and a products component.
 *
 * The hero component shows a title, a subtitle, and a call-to-action button.
 *
 * The products component shows a list of products, with a title and a list of product items.
 *
 * The ClerkProvider component is used to wrap the application in Clerk's authentication context.
 */
const page = () => {
  return (
    <div className="bg-gradient-to-tl from-blue-950 via-gray-500 to-indigo-300">
      <Hero />
      <Products />
    </div>
  );
};

export default page;

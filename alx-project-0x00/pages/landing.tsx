import React from "react";
import Button from "../components/Button";

export default function LandingPage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

      {/* Small Buttons */}
      <div className="space-x-4">
        <Button title="Small - Rounded SM" className="text-sm rounded-sm px-3 py-1 bg-blue-500 text-white" />
        <Button title="Small - Rounded MD" className="text-sm rounded-md px-3 py-1 bg-blue-500 text-white" />
        <Button title="Small - Rounded FULL" className="text-sm rounded-full px-3 py-1 bg-blue-500 text-white" />
      </div>

      {/* Medium Buttons */}
      <div className="space-x-4">
        <Button title="Medium - Rounded SM" className="text-base rounded-sm bg-green-500 text-white" />
        <Button title="Medium - Rounded MD" className="text-base rounded-md bg-green-500 text-white" />
        <Button title="Medium - Rounded FULL" className="text-base rounded-full bg-green-500 text-white" />
      </div>

      {/* Large Buttons */}
      <div className="space-x-4">
        <Button title="Large - Rounded SM" className="text-lg rounded-sm px-6 py-3 bg-red-500 text-white" />
        <Button title="Large - Rounded MD" className="text-lg rounded-md px-6 py-3 bg-red-500 text-white" />
        <Button title="Large - Rounded FULL" className="text-lg rounded-full px-6 py-3 bg-red-500 text-white" />
      </div>
    </div>
  );
}

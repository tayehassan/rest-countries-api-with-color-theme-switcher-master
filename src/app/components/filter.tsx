"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Region from "./regions";

export default function FilterByRegion() {
  const [currentRegion, setCurrentRegion] = useState<string|any >();
  const [open, setOpen] = useState<boolean>(false);
  function handlelick() {
    setOpen(!open);
  }
  return (
    <div className="">
      <button
        type="button"
        className="flex h-14 w-[200px] items-center justify-center gap-8 rounded-md bg-element-color text-lg"
        onClick={handlelick}
      >
        Filter by region
        {open ? (
          <ChevronDownIcon className="size-4" />
        ) : (
          <ChevronUpIcon className="size-4" />
        )}
      </button>

      {open && (
        <Region
          onOpen={setOpen}
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
        />
      )}
    </div>
  );
}

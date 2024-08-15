import Link from "next/link";
import { region } from "../lib/data";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Regions({
  onOpen,
  currentRegion,
  setCurrentRegion,
}: {
  onOpen: any;
  currentRegion: string;
  setCurrentRegion: any;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  function createURL(region: string) {
    const params = new URLSearchParams(searchParams);
    params.set("region", region);
    return `${pathname}?${params.toString()}`;
  }

  return (
    <ul className="no-scrollbar absolute z-10 mt-1 w-[200px] overflow-auto scroll-smooth rounded-md bg-element-color py-2">
      {region.map((c: any, index: number) => (
        <li className={`hover:bg-background- relative rounded-md`} key={c}>
          <Link
            className={`flex h-7 w-full items-stretch self-center pl-5 text-base ${c === currentRegion ? "bg-background-" : ""}`}
            href={createURL(c)}
            onClick={() => {
              setCurrentRegion(c);
              onOpen((open: boolean) => !open);
            }}
          >
            {c}
          </Link>
        </li>
      ))}
      <li className={`hover:bg-background- relative rounded-md`}>
        <Link
          className={`flex h-7 w-full items-stretch self-center pl-5 text-base ${currentRegion === "All region" ? "bg-background-" : ""}`}
          href={"/"}
          onClick={() => {
            setCurrentRegion("All region");
          }}
        >
          All region
        </Link>
      </li>
    </ul>
  );
}

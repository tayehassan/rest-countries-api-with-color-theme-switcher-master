"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import FilterByRegion from "./filter";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback(function (country: string) {
    const params = new URLSearchParams(searchParams);
    if (country) {
      params.set("country", country);
    } else {
      params.delete("country");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 700);
  return (
    <nav className="flex max-h-fit flex-col gap-y-5 md:flex-row md:justify-between md:gap-0">
      <div className="relative flex h-14 items-center overflow-hidden rounded-md md:w-[480px]">
        <MagnifyingGlassIcon className="absolute left-3 size-4" />
        <label htmlFor="search" className="sr-only"></label>
        <input
          className="peer h-14 w-full bg-element-color pl-10 text-lg"
          type="search"
          defaultValue={searchParams.get("query")?.toString()}
          placeholder={"Search for a country"}
          onChange={(e: any) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      <FilterByRegion />
    </nav>
  );
}

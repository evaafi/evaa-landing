"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger >
        <>
          {open && (
            <Button variant="ghost" className="md:hidden px-2" onClick={() => setOpen(false)}>
              <CloseIcon width={36} height={36} />
            </Button>
          )}
          {!open && (
            <Button variant="ghost" className="md:hidden px-2" onClick={() => setOpen(true)}>
              <MenuIcon width={36} height={36} />
            </Button>
          )}
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none w-dvw -mt-[1px] pt-4 pb-10 space-y-2 ">
        <DropdownMenuItem className="h-10 justify-center">
          Home
        </DropdownMenuItem>
        <DropdownMenuItem className="h-10 justify-center">
          How it works
        </DropdownMenuItem>
        <DropdownMenuItem className="h-10 justify-center">FAQ</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Folder, House, Tag } from "lucide-react"

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function Dropdown() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-transparent ml-[5px] text-white">Links</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
        >
          <Link href="/">
                        <div className='flex items-center gap-4'>
                            <House />
                            Dashboard
                        </div>
                    </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
        >
          <Link href="/products">
                        <div className='flex items-center gap-4'>
                            <Tag />
                            Products
                        </div>
                    </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
        >
          <Link href="/others">
                        <div className='flex items-center gap-4'>
                            <Folder />
                            Other
                        </div>
                    </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

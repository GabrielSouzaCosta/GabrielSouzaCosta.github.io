import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui/sheet'

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open sidebar menu"
        className="block lg:hidden text-2xl text-neutral-700 dark:text-neutral-300"
      >
        <i className="ph ph-list"></i>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription asChild>
            <div>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
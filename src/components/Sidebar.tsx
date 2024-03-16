import { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from './ui/sheet'
import i18next, { t } from 'i18next'
import LanguageSwitcher from './LanguageSwitcher';

const Sidebar = () => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const lng = i18next.language === 'en' ? '' : `/${i18next.language}`;

  return (
    <Sheet
      open={isSidebarOpen}
      onOpenChange={setIsSidebarOpen}
    >
      <SheetTrigger
        aria-label="Open sidebar menu"
        className="block lg:hidden text-2xl text-neutral-700 dark:text-neutral-300"
      >
        <i className="ph ph-list"></i>
      </SheetTrigger>
      <SheetContent>
        <SheetDescription asChild>
          <nav className="flex-1 flex flex-col items-center justify-center gap-y-8 h-full">
            <ul className="flex flex-col text-lg uppercase justify-center items-center h-full gap-y-4 text-neutral-800 dark:text-neutral-300">
              <li className="transition-colors hover:text-primary-600 hover:dark:text-primary-400">
                <a href={lng + "/#about"} onClick={closeSidebar}>
                  {t("About me")}
                </a>
              </li>
              <li className="transition-colors hover:text-primary-600 hover:dark:text-primary-400">
                <a href={lng + "/#experience"} onClick={closeSidebar}>
                  {t("Experience")}
                </a>
              </li>
              <li className="transition-colors hover:text-primary-600 hover:dark:text-primary-400">
                <a href={lng + "/#projects"} onClick={closeSidebar}>
                  {t("Projects")}
                </a>
              </li>
              <li className="transition-colors hover:text-primary-600 hover:dark:text-primary-400">
                <a href={lng + "/#services"} onClick={closeSidebar}>
                  {t("Services")}
                </a>
              </li>
              <li className="transition-colors hover:text-primary-600 hover:dark:text-primary-400">
                <a href={lng + "/#contact"} onClick={closeSidebar}>
                  {t("Contact")}
                </a>
              </li>
            </ul>
            <LanguageSwitcher />
          </nav>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
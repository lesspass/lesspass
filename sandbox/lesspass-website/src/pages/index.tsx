import React from "react"
import { PageProps } from "gatsby"
import logo from "../images/icon.png"

export default function IndexPage(props: PageProps) {
  return (
    <div>
      <div className="bg-grey-100 h-screen w-full overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center">
            <a href="#" aria-label="Home">
              <img
                className="w-auto h-8 sm:h-10 my-6"
                src={logo}
                alt="Logo"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

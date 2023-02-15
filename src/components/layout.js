import * as React from "react"
import { SearchProvider, SearchBox } from "@elastic/react-search-ui"
import "@elastic/react-search-ui-views/lib/styles/styles.css"
import { config } from "../config/config"
import { Link, navigate } from "gatsby"
import { WithSearch } from "@elastic/react-search-ui"

const SiteLayout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link to="/">To startpage</Link>
        <SearchProvider config={config}>
          <WithSearch
            mapContextToProps={({ searchTerm, setSearchTerm }) => ({
              searchTerm,
              setSearchTerm,
            })}
          >
            {({ searchTerm, setSearchTerm }) => (
              <SearchBox
                onSubmit={searchTerm => {
                  navigate(`/searchresult/?q=${searchTerm}`)
                }}
                autocompleteMinimumCharacters={2}
                autocompleteResults={{
                  linkTarget: "_blank",
                  sectionTitle: "Results",
                  titleField: "title",
                  urlField: "nps_link",
                }}
                debounceLength={200}
              />
            )}
          </WithSearch>
        </SearchProvider>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default SiteLayout

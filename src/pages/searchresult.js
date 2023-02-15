import * as React from "react"
import { graphql } from "gatsby"

import SiteLayout from "../components/layout"
import Seo from "../components/seo"

import {
  ErrorBoundary,
  SearchProvider,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  WithSearch,
} from "@elastic/react-search-ui"
import { Layout } from "@elastic/react-search-ui-views"
import "@elastic/react-search-ui-views/lib/styles/styles.css"
import { config } from "../config/config"

const SearchResult = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <SiteLayout location={location} title={siteTitle}>
      <h2>Search results:</h2>
      <SearchProvider config={config}>
        <WithSearch
          mapContextToProps={({ wasSearched, searchTerm, setSearchTerm }) => ({
            wasSearched,
            searchTerm,
            setSearchTerm,
          })}
        >
          {({ wasSearched, searchTerm, setSearchTerm }) => {
            return (
              <div>
                <ErrorBoundary>
                  <Layout
                    sideContent={<div></div>}
                    bodyContent={
                      <Results
                        titleField="title"
                        urlField="nps_link"
                        thumbnailField="image_url"
                        shouldTrackClickThrough
                      />
                    }
                    bodyHeader={
                      <React.Fragment>
                        {wasSearched && <PagingInfo />}
                        {wasSearched && <ResultsPerPage />}
                      </React.Fragment>
                    }
                    bodyFooter={<Paging />}
                  />
                </ErrorBoundary>
              </div>
            )
          }}
        </WithSearch>
      </SearchProvider>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Search result" />

export default SearchResult

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

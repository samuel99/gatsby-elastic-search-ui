import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector"

const connector = new AppSearchAPIConnector({
  searchKey: "search-33drsfazoc25tdy4bwaenapx",
  engineName: "national-parks-demo",
  endpointBase: "https://testing-904d77.ent.westeurope.azure.elastic-cloud.com",
  cacheResponses: false,
})

export const config = {
  alwaysSearchOnInitialLoad: false,
  apiConnector: connector,
  hasA11yNotifications: true,
  autocompleteQuery: {
    results: {
      resultsPerPage: 8,
      result_fields: {
        title: { raw: {} },
        nps_link: { raw: {} },
      },
      search_fields: {
        title: {},
        description: {},
      },
    },
  },
  searchQuery: {
    result_fields: {
      title: { raw: {} },
    },
    search_fields: {
      title: {},
    },
  },
}

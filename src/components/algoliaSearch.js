import React, { useState, useEffect, useRef } from "react"
// import classnames from 'classnames'
import algoliasearch from 'algoliasearch/lite'
import { Link } from "gatsby"
import {
    InstantSearch,
    connectStateResults,
    connectAutoComplete,
  } from "react-instantsearch-dom"

import SearchList from "./searchList"

const searchClient = algoliasearch('EO7ZPSONZN', 'b66a683958ffd5191f8bffc76ff26e82');

const StateResults = ({ searchResults }) => {
    const hasResults = searchResults && searchResults.nbHits !== 0

    return (
        <>
            <div hidden={hasResults} className="without-results">
                <p className="no-result-text">Your search did not match any language</p>
                {/* <SearchList /> */}
            </div>
        </>
    )
}
  
  const CustomStateResults = connectStateResults(StateResults)
  
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    }, [ref, handler])
  }
  
  const AutoComplete = connectAutoComplete(
    ({ hits, currentRefinement, refine }) => {
      const [ focus, isFocus ] = useState(false)

      const ref = useRef()
  
      useOnClickOutside(ref, () => isFocus(false))
      return (
        <>
          <div className="search-holder">
            <div className="search-bar">
                <div className="input-search">
                <button className="btn-search" type="button" ><img src={require('../images/icon-search.svg')} alt="search language" /></button>
                <span className="mobile-hover-trigger"></span>
                <label>
                    What language do you want to learn?
                    <input
                        className="text-xs input-field"
                        type="search"
                        placeholder="What language do you want to learn?"
                        value={currentRefinement}
                        onChange={event => refine(event.currentTarget.value)}
                        onFocus={() => isFocus(true)}
                    />
                </label>
                </div>
            </div>
            <div
              role="presentation"
              className="close-holder"
              onClick={() =>
                typeof window !== "undefined" ? window.history.back() : ""
              }
            >
            </div>
          </div>
          <div className="results-holder">
            {focus && currentRefinement ? (
              <>
                <div className="with-results-holder">
                  {hits.length !== 0 ? (
                    <h3 className="title-heading">Search Results</h3>
                  ) : (
                    ""
                  )}
                  {hits.map(hit => {
                    const LinkToSinglePage = hit.path
  
                    return (
                      <div key={hit.id}>
                        <div className="with-results">
                          <div className="with-results-text">
                            <Link
                              to={LinkToSinglePage}
                            >
                              <p className="with-results-title">{hit.title}</p>
                              <p className="with-results-desc">{hit.seoDescription}</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <CustomStateResults />
              </>
            ) : (
              <SearchList />
            )}
          </div>
        </>
      )
    }
  )

const algoliaSearch = ({}) => {
    return(
        <InstantSearch searchClient={searchClient} indexName="Pages">
            <AutoComplete />
        </InstantSearch>
    )
  }

  export default algoliaSearch
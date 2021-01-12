import React, { useState, useEffect } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Profile from "./ProfileComponent";
import { SEARCH } from "./searchFunction";
import FilterComponent from "./FilterComponent";
import SearchComponent from "./SearchComponent";
import Pagination from "./PaginationComponent";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

function Home({ error, records, isLoading }) {
    const [isFiltered, setIsFiltered] = useState(false);
    const [filterBy, setFilterBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);


    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});

        var ele = document.querySelectorAll('.tap-target');
        var insta = M.TapTarget.init(ele, {});
    }, [])

    const filter = (filterType) => {
        setIsFiltered(true);
        setFilterBy(filterType);

    }

    const clearFilter = () => {
        setIsFiltered(false);
    }

    const onSearch = (e) => {
        SEARCH(e);
    }

    //Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = records.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <React.Fragment>
            <Header />
            <div className="container">


                <SearchComponent onSearch={onSearch} />
                <FilterComponent filter={filter} clearFilter={clearFilter} />
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="row">
                            <Pagination postsPerPage={postsPerPage} totalPosts={records.length} paginate={paginate} />
                            <Profile error={error} records={currentPosts} isFiltered={isFiltered} filterBy={filterBy} isLoading={isLoading} />
                        </div>
                    </div>
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={records.length} paginate={paginate} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home;
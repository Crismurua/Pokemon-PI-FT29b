import React from "react";
import { next, prev } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

import "./Pagination.css";

export default function Pagination(){
    const currentPage = parseInt(useSelector(state => state.currentPage))
    const pokePerPage = parseInt(useSelector(state => state.pokePerPage))
    const pokemons = useSelector(state => state.pokemons)
    const filtered = useSelector(state => state.filteredPoke)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();


    const totalPages = Math.ceil(pokemons.length / pokePerPage)



    const handleNext = e => {
        dispatch(next())
        window.scrollTo(0, 0);
    }
    const handlePrev = e => {
        dispatch(prev())
        window.scrollTo(0, 0);
    }

    return (
        <div className="main">
            <button onClick={handlePrev} disabled={currentPage === 1 || loading || !pokemons.length || !filtered.length ? true : false}>Prev</button>
            <h3 className="page">{currentPage}</h3>
            <button onClick={handleNext} disabled={currentPage === totalPages || loading || !pokemons.length || !filtered.length ? true : false}>Next</button>
        </div>
    )
}
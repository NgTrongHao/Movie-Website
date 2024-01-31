import React, {Component} from 'react';
import {ListOfFilms} from "../../../shared/ListOfFilms";
import FilmsPresentation from "./FilmsPresentation";

export class Films extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmsList : ListOfFilms
        }
    }

    render() {
        return (
            <div>
                <FilmsPresentation films = {this.state.filmsList}/>
            </div>
        );
    }
}
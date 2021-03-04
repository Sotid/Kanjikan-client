import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



 class Dictionary extends Component {
   state = {
     allKanjis: [],
     query: ""
   }

   componentDidMount () {
       this.props.getAllKanjis()
   }

   handleSearchInput = (event) => {
    let query = event.target.value
    // this.setState(() => ({query:query}))
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`)
    .then((found) => {
        this.setState(() => ({all: found.data}));
      }
    )

     
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

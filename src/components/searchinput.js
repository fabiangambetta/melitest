import { render } from '@testing-library/react';
import react, { Component } from 'react';
import { withRouter } from 'react-router';
import logomeli from '../assets/Logo_ML.png';



class Searchinput extends Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: ""};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.SearchItems = this.SearchItems.bind(this);
    }
    handleInputChange(e) {
        const searchQuery = e.target.value;
        this.setState({ searchQuery: searchQuery });
        console.log(searchQuery);
        
    }

    SearchItems(e)
    {

        console.log("SEARCH");
        const query = this.state.searchQuery;
        console.log(query);
        alert(`/items?search=${query}`);
        
        this.props.history.push('/items?search='+query);
    }
    render() {
        return (
            <div className="searchbox_container">
                <div className="searchbox_img_container">
                    <img className="searchbox_img" src={logomeli} alt="Mercado Libre Uruguay - Donde comprar y vender de todo" />
                </div>
                <div className="searchbox_input_container" >
                    <form>
                        <input type="search" placeholder="Nunca dejes de buscar" className="searchbox_input" onChange={this.handleInputChange}></input>
                        <button type="sumbit" className="searchbox_button" onClick={this.SearchItems} >
                            <div className="searchbox_icon"></div>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Searchinput);
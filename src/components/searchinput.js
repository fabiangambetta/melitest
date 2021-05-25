import { render } from '@testing-library/react';
import react, { Component } from 'react';
import { withRouter } from 'react-router';
import logomeli from '../assets/images/Logo_ML@2x.png';
import '../assets/styles/components/SearchInput.css';



class Searchinput extends Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: ""};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.SearchItems = this.SearchItems.bind(this);
    }

    /*Actualiza el estado con el texto que se ingresa en la cadena de búsqueda */
    handleInputChange(e) {
        const searchQuery = e.target.value;
        this.setState({ searchQuery: searchQuery });
    }
    /*Dispara la búsqueda por enter en el input */
    enterPressed(e) {
        var code = e.keyCode || e.which;
        if(code === 13) { 
            const query = this.state.searchQuery;
            this.props.history.push('/items?search='+query);
        } 
    }

    SearchItems(e)
    {
        const query = this.state.searchQuery;
        if(query){
            this.props.history.push('/items?search='+query);
        }
    }
    
    render() {
        return (
            <div className="searchbox_container">
                <div className="searchbox_img_container">
                    <img className="searchbox_img" src={logomeli} alt="Mercado Libre Uruguay - Donde comprar y vender de todo" aria-label="Mercadolibre"  />
                </div>
                <div className="searchbox_input_container" >
                        <input type="search" placeholder="Nunca dejes de buscar"  aria-label="Escribe aquí lo que deseas buscar" className="searchbox_input" onKeyPress={this.enterPressed.bind(this)} onChange={this.handleInputChange} maxLength="70" value={this.state.searchQuery}></input>
                        <button type="button" className="searchbox_button" aria-label="Buscar en mercado libre" onClick={this.SearchItems} >
                            <div className="searchbox_icon"></div>
                        </button>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Searchinput);
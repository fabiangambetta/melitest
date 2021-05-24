import Breadcrumb from "./breadcrumb";
import Header from "./header";
import ItemDetails from "./itemdetails";
import Searchitemresult from "./searchitemresult";


function ProductDetails(props){
    return(
    
    <div className="search_result_container">
        <Header></Header>
        <Breadcrumb></Breadcrumb>
        <ItemDetails></ItemDetails>
    </div>
    );
};

export default ProductDetails;
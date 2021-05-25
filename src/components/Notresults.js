import "../assets/styles/components/Notresults.css";
function Notresults(props) {
  return (
    <div className="product_not_found_container">
      <div className="product_not_found_message">
            {props.message}
      </div>
    </div>
  );
}

export default Notresults;

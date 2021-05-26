
import '../assets/styles/components/Breadcrumb.css';
const Breadcrumb = (props) => {

    if (props.categs) {
        const categories = props.categs.map((category) =>
            <li className="breadcrumb_category" key={category}>
                {category}
            </li>
        );
        return (
            <ul className="breadcrumb">
                {categories}
            </ul>
        );
    }
    else {
        return (
            <div className="breadcrumb"></div>
        )
    }
}


export default Breadcrumb;

const Breadcrumb = (props) => {

    if (props.categs) {
        const categories = props.categs.map((category) =>
            <li className="breadcrumb_category" key={category}>
                {category}
            </li>
        );
        return (
            <div className="breadcrumb">
                {categories}
            </div>
        );
    }
    else {
        return (
            <div className="breadcrumb"></div>
        )
    }
}

export default Breadcrumb;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../utils/api";
import Breadcrumb from "./Breadcrumb";
import Itemdetailbuy from "./Itemdetailbuy";
import '../assets/styles/components/Itemdetails.css';
import Notresults from "./Notresults";

/* Esta componente es responsable de mostrar el detalle del producto seleccionado */
function ItemDetails() {
  let [item, setItem] = useState(null);
  let [categories, setCategories] = useState(null);
  let [error, setError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    API.searchitem(id)
      .then((data) => {
        setError(false);
        setItem(data.item);
        setCategories(data.categories);
      })
      .catch(function () {
        setItem(null);
        setError(true);
        setCategories([]);
      });
  }, [id]);

  if (item) {
    /*Realizo un split del texto recuperado para respetar los saltos de líneas ingresados oroginalmente en la descripción del producto*/
    const description = item.description;
    const descritionparsed = description
      .split("\n")
      .map((str, index) => <p className="product_detail_paragraph" key={index}>{str}</p>);
    return (
      <>
        <Breadcrumb categs={categories}></Breadcrumb>
        <div className="product_detail_container">
          <div className="product_detail_img_and_description">
            <div className="product_details_img_container">
              <img
                className="product_details_img"
                src={item.picture}
                alt="Imagen del producto"
              ></img>
            </div>
            <h2 className="product_description_title">
              Descripción del producto
            </h2>
            <div
              className="product_details_description"
              aria-label="Descripción del producto"
            >
              {descritionparsed
                ? descritionparsed
                : "Este producto no cuenta con una descripción."}
            </div>
          </div>
          <Itemdetailbuy item={item}></Itemdetailbuy>
        </div>
      </>
    );
  } else if (error) {
    const message = `No se ha podido recuperar ningún elemento con el id ${id}`
    return (
        <>
        <Breadcrumb categs={null}></Breadcrumb>
        <div className="product_detail_container">
            <Notresults message= {message}></Notresults>
        </div>
        </>);
  }
  return (
    
      <div className="product_detail_container" ></div>

  );
}

export default ItemDetails;

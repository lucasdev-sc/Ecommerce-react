import React, { useState } from "react";

import { ProductsData } from "./ProductsData";
import { BsFillBagPlusFill } from "react-icons/bs";
import * as s from "./styles";
import Input from "../../components/Input";
import Products from "../../components/Products";
import ColumnLeft from "../../components/Products/ColumnLeft";
import ButtonComponent from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleAddBag = (id: string) => {
    setProducts([...products, ProductsData.filter((p) => p.id === id)]);
  };

  return (
    <div className={s.Container()}>
      <Products>
        <ColumnLeft>
          <div className={s.SearchDiv()}>
            <p className={s.Title()}>Search Item</p>
            <div className={s.InputDiv()}>
              <input
                type="text"
                placeholder="Products..."
                className={s.InputDiv({ type: true })}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </div>
          </div>
          {ProductsData.filter((p) =>
            p.title.toLowerCase().includes(search)
          ).map((item, index) => {
            return (
              <div key={item.id} className={s.Products()}>
                <Link to={`/home/item-view/${item.id}`}>
                  <div className={s.bgImage()}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className={s.TextDiv()}>
                    <p className={s.TitleProduct()}>{item.title}</p>
                    <p className={s.DescriptionProduct()}>{item.description}</p>
                  </div>
                </Link>
                <div className={s.PriceDiv()}>
                  <p className={s.Price()}>$ {item.price}</p>
                  <ButtonComponent
                    className={s.IconPriceDiv()}
                    isTitle={false}
                    onClick={() => handleAddBag(item.id)}
                  >
                    <BsFillBagPlusFill />
                  </ButtonComponent>
                </div>
              </div>
            );
          })}
        </ColumnLeft>
      </Products>
    </div>
  );
};

export default Home;

import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import Line from "../../components/Line/Line";
import Products from "../../components/Products";
import ColumnLeft from "../../components/Products/ColumnLeft";
import ColumnRight from "../../components/Products/ColumnRight";
import { ProductsData } from "../Home/ProductsData";

import * as s from "./styles";

const ItemView = () => {
  const { id } = useParams();

  const product = ProductsData.filter((p) => p.id === id);

  return (
    <div className={s.Container()}>
      <div className={s.ColumnDiv()}>
        <div className={s.Back()}>
          <Link to="/">
            <BiArrowBack />
            <span>Back</span>
          </Link>
        </div>
        <ColumnLeft type={false}>
          <div className={s.Preview()}>
            {product.map((item, index) => {
              return (
                <div style={{ display: "flex" }}>
                  <div className={s.Images()}>
                    <div className={s.ImagePreview()}>
                      <div className={s.bgImage({ size: "small" })}>
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                    <div className={s.bgImage()}>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div>
                    <div className={s.TextDiv()}>
                      <h1 className={s.Text({ text: "title" })}>
                        {item.title}
                      </h1>
                      <h2 className={s.Text({ text: "description" })}>
                        {item.description}
                      </h2>
                      <div>{/* Icons Star */}</div>
                      <h2 className={s.Text({ text: "price" })}>
                        $ {item.price}
                      </h2>
                      <p className={s.Text({ text: "text" })}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis pellentesque tellus imperdiet mattis. Proin in quis
                        ipsum non amet imperdiet. Dignissim nisi leo a at. Sit
                        nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae
                        elementum libero.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.BtnAdd()}>
            <ButtonComponent isTitle={true} title="Add to Bag">
              <BsFillBagPlusFill />
            </ButtonComponent>
          </div>
          <div className={s.DescriptionDiv()}>
            <Line type="vertical" />
            <h2 className={s.Text({ text: "price" })}>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              odio faucibus nec malesuada purus volutpat vel sed viverra. Id
              sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus
              pellentesque sagittis. Felis rhoncus facilisis massa eget purus in
              purus. Etiam at cras nulla nunc. Malesuada in pretium diam
              scelerisque sit mattis in egestas neque. Eu porta tempor sodales
              nisl integer turpis porttitor sed sed. Ut senectus odio dictum
              enim velit tempor diam quisque suspendisse. Orci vel ridiculus
              diam viverra. Libero malesuada orci, quis placerat suscipit augue
              imperdiet. Et praesent augue dictum mauris eget lacus malesuada.
              Aenean nisi, sodales natoque massa magna dignissim mi. Mattis
              tellus, justo, lorem sed tempor diam sit viverra enim. Id id
              placerat eu etiam nulla laoreet. Dignissim leo fames turpis quis
              suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus
              eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare.
              Tristique volutpat facilisis in ut proin. Est vitae facilisi
              sollicitudin id lorem mattis nibh ipsum, nec. Consectetur
              consectetur morbi morbi aliquet mi risus, velit, sit at. Integer
              morbi viverra hendrerit risus. Odio phasellus nibh senectus nec id
              enim quam sed. At potenti sollicitudin sollicitudin lobortis
              morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor
              suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut
              fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis
              fusce. Mi vitae nibh mi ut feugiat varius risus eros.
            </p>
          </div>
        </ColumnLeft>
      </div>
    </div>
  );
};

export default ItemView;

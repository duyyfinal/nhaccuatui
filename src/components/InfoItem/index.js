import classNames from "classnames/bind";
import styles from "./InfoItem.module.scss";
import { Fragment, useEffect, useState, useRef } from "react";

const cs = classNames.bind(styles);

function InfoItem({ nameItem, artItem, typeItem }) {
  return (
    <Fragment>
      {nameItem && <h3 className={cs(typeItem ? typeItem : "")}>{nameItem}</h3>}
      {artItem && <h4>{artItem}</h4>}
    </Fragment>
  );
}

export default InfoItem;

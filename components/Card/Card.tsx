"use client";

import React from "react";
import Image from "next/image";
import cardStyle from "./Card.module.css";
//import styled from "styled-components";

// type CardData = Partial<Character & Location>;

interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
  data: CardData;
}

// const CardStyle = styled.div`
//   background-color: red;
// `;

const Card = ({ data }: Props) => {
  let formattedType = data.type;
  formattedType ||= "No type";

  return (
    // <CardStyle>
    <div className={cardStyle.Card}>
      <p>Name: {data.name}</p>
      <p>Type: {formattedType}</p>
      <p>Created:{data.created} </p>
      {!!data.image && (
        <Image width="100" height="100" alt={data.name!} src={data.image} />
      )}
    </div>
    // </CardStyle>
  );
};

export default Card;

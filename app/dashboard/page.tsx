import Image from "next/image";
import React from "react";

async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}

const Dashboard = async () => {
  const data = await getData();

  return (
    <div>
      <Image width="100" height="100" src={data.image} alt="Morty" />
    </div>
  );
};

export default Dashboard;

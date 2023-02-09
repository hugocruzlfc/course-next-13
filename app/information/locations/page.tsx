import React from "react";
import { getLocations } from "./services";
import { Card, Navigator } from "../../../components";
import { Routes } from "@/models";

const fetchLocations = async () => {
  return getLocations();
};

const Locations = async () => {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
};

export default Locations;

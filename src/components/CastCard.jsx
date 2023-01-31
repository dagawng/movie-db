import React from "react";

import useFetch from "../useFetch";
import CreditCard from "./CreditCard";
function CastCard({ path }) {
  const { data, isLoading } = useFetch(`${path}/credits`);

  return (
    <>
      <div>CastCard</div>
    </>
  );
}

export default CastCard;

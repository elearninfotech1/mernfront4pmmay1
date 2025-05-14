import axios from "axios";
import React, { useEffect, useState } from "react";

const useCustomHokkEx = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("Unable to Fetch Treatment Data");
      });
  });
  return data;
};

export default useCustomHokkEx;

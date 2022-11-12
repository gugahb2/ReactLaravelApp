import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

const useAssetsForButton2 = () => {
  const API_URL = `${BASE_URL}/api/asset/button-2`;
  const [data, setData] = useState({
    result: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setData({
          result: res.data,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        setData({
          data: null,
          loading: false,
          error: error.toString()
        })
      });
  }, [])

  return data;
}

export default useAssetsForButton2;

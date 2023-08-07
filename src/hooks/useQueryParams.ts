/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useQueryParams = (paramName: string) => {
  const { isReady, query } = useRouter();
  const [param, setParam] = useState("");

  useEffect(() => {
    if (isReady) {
      setParam(query[paramName] as string);
    }
  }, [isReady]);

  return param;
}

export default useQueryParams;
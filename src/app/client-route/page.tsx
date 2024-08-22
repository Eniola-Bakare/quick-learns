"use client";

import { useThemeContext } from "@/components/contexts/ThemeProvider";
import ClientUtils from "@/utils/ClientUtils";

// import ServerUtils from "@/utils/serverUtils";

export default function ClientRoute() {
//   const result = ServerUtils();
    const clientUtil = ClientUtils()

  const { primary, secondary } = useThemeContext();
  return (
    <div>
      ClientRoute
      <br />
      <p
        style={{
          color: primary,
        }}
      >
        Hello, Dev ENiolaaaa !
      </p>
      <br />
      <p
        style={{
          color: secondary,
        }}
      >
        Hello, Dev !
      </p>
      <br />
      {clientUtil}
      {/* <p>{result}</p> */}
    </div>
  );
}

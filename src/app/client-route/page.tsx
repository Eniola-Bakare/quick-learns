"use client";

import { useThemeContext } from "@/components/contexts/ThemeProvider";

// import ServerUtils from "@/utils/serverUtils";

export default function ClientRoute() {
  //   const result = ServerUtils();

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
      {/* <p>{result}</p> */}
    </div>
  );
}

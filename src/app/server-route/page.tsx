import ClientUtils from "@/utils/ClientUtils";
import ServerUtils from "@/utils/serverUtils";

export default function ServerPage() {
  const result = ServerUtils();
//   const clientUtil = ClientUtils();//wouldn't work cause it's a client only component

  return (
    <div>
      ServerPage
      <br />
      <p>{result}</p>
      {/* <p>{clientUtil}</p> */}
    </div>
  );
}

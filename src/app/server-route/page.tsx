import ServerUtils from "@/utils/serverUtils";

export default function ServerPage() {
  const result = ServerUtils();
  return (
    <div>
      ServerPage
      <br />
      <p>{result}</p>
    </div>
  );
}

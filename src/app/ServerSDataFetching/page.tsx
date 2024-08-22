export default async function Page() {
  type User = {
    id: number;
    userName: string;
    nAmer: string;
    email: string;
  };

  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve(console.log("awaited"));
  //   }, 1000)
  // );
  const users = await result.json();
  console.log(users);

  return (
    <div className="flex flex-wrap gap-10 p-8">
      {users?.map((user: User) => {
        return (
          <div key={user.id} className="m-5 p-10 bg-cyan-800 ">
            <div>
              <p>{user.id}</p>
              <br />
            </div>
            <div>
              <p>{user.userName}</p>
              <br />
            </div>
            <div>
              <p>{user.email}</p>
              <br />
            </div>
            <div>
              <p>{user.nAmer}</p>
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}

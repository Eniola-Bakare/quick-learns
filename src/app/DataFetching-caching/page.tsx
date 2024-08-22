type User = {
  id: number;
  completed: boolean;
  title: string;
  userId: string;
};

export default async function Caching() {
  const response = await fetch("http://localhost:3001/users", {
    cache: "no-store",
  });
  const users = await response.json();
  return (
    <div>
      Caching
      <div className="flex flex-wrap gap-10 p-8">
        {users?.map((user: User) => {
          return (
            <div key={user.id} className="m-5 p-10 bg-cyan-800 ">
              <div>
                <p>{user.id}</p>
                <br />
              </div>
              <div>
                <p>{user.title}</p>
                <br />
              </div>
              <div>
                <p>{user.completed ? "true" : "false"}</p>
                <br />
              </div>
              <div>
                <p>{user.userId}</p>
                <br />
              </div>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
}

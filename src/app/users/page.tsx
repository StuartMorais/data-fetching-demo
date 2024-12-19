type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log (users);
  return <div>
    <h1>Users</h1>
    <ul>
      {/* First way of showing fetched data, this way you can show the data in a more custom and organized way */}
      {users.map((users: User) => <li key={users.id}> {users.id} | {users.name} | {users.email} | {users.phone} | {users.username}</li>)}
      {/* Second way of showing fetched data, this method will show the data in a more raw way */}
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </ul>
  </div>
}
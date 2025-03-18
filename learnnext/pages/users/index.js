const UsersPage = ({ users }) => {
    return (
      <div>
        <h1>Daftar Pengguna</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={`/users/${user.id}`}>{user.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export async function getStaticProps() {
    // Ambil data dari API menggunakan fetch
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
  
    return {
      props: {
        users,
      },
    };
  }
  
  export default UsersPage;
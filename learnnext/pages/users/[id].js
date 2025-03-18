const UserDetail = ({ user }) => {
    return (
      <div>
        <h1>Detail Pengguna</h1>
        <p>Nama: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Telepon: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  };
  
  export async function getStaticPaths() {
    // Ambil data pengguna untuk menghasilkan paths
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
  
    // Buat paths berdasarkan ID pengguna
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }));
  
    return {
      paths,
      fallback: false, // Tampilkan 404 jika path tidak ditemukan
    };
  }
  
  export async function getStaticProps({ params }) {
    // Ambil detail pengguna berdasarkan ID
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await res.json();
  
    return {
      props: {
        user,
      },
    };
  }
  
  export default UserDetail;
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";
import { FaPlusCircle, FaSpinner } from "react-icons/fa";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axiosClient.delete(`/users/${user.id}`).then(() => {
      setNotification("User was successfully deleted");
      getUsers();
    });
  };

  const getUsers = () => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-5">
      <div className="flex flex-row gap-5 items-center pb-5">
        <h1 className="text-lg font-semibold">Applicants</h1>
        <button
          onClick={() => navigate(`/users/new`)}
          className="flex flex-row gap-2 items-center bg-[#85a236] p-3 rounded-[16px] text-[16px] text-white font-semibold hover:bg-[#9ec040]"
        >
          <FaPlusCircle /> Create
        </button>
      </div>
      <div className="overflow-scroll relative w-[300px] lg:w-[1080px] md:w-[600px] sm:w-[580px] bg-white rounded-lg shadow-md p-2">
        {loading && (
          <div className="flex flex-col items-center text-center">
            <FaSpinner className="animate-spin text-[#FF6A35]" />
            Loading...
          </div>
        )}
        {!loading && (
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Posisi</th>
                <th>Nama</th>
                <th>No. KTP</th>
                <th>Tempat Tgl Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Agama</th>
                <th>Gol. Darah</th>
                <th>Status</th>
                <th>Alamat KTP</th>
                <th>Alamat Tinggal</th>
                <th>Email</th>
                <th>No. Telp</th>
                <th>Orang terdekat yang dapat dihubungi</th>
                <th>Skill</th>
                <th>Bersedia ditempatkan diseluruh kantor perusahaan</th>
                <th>Penghasilan yang diharapkan</th>
                <th>Pendidikan Terakhir</th>
                <th>Riwayat Pelatihan</th>
                <th>Riwayat Pekerjaan</th>
                <th>Create Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.noktp}</td>
                  <td>{u.tempattanggallahir}</td>
                  <td>{u.jeniskelamin}</td>
                  <td>{u.agama}</td>
                  <td>{u.goldarah}</td>
                  <td>{u.status}</td>
                  <td>{u.alamatktp}</td>
                  <td>{u.alamattinggal}</td>
                  <td>{u.email}</td>
                  <td>{u.notelp}</td>
                  <td>{u.huborangterdekat}</td>
                  <td>{u.skill}</td>
                  <td>{u.bersediaditempatkan ? "Ya" : "Tidak"}</td>
                  <td>{u.penghasilandiharap}</td>
                  <td>{u.pendidikanterakhir}</td>
                  <td>{u.riwayatpelatihan}</td>
                  <td>{u.riwayatpekerjaan}</td>
                  <td>{u.created_at}</td>
                  <td>
                    <Link className="btn-edit" to={"/users/" + u.id}>
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn-delete"
                      onClick={(ev) => onDeleteClick(u)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

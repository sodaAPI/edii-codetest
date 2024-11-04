import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function UserForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    id: null,
    name: "",
    posisi: "",
    noktp: "",
    tempattanggallahir: "",
    jeniskelamin: "",
    agama: "",
    goldarah: "",
    status: "",
    alamatktp: "",
    alamattinggal: "",
    notelp: "",
    huborangterdekat: "",
    skill: "",
    bersediaditempatkan: false, // Initialize as boolean
    penghasilandiharap: "",
    pendidikanterakhir: "",
    riwayatpelatihan: "",
    riwayatpekerjaan: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosClient
        .get(`/users/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setUser({
            ...data,
            bersediaditempatkan: data.bersediaditempatkan === "true", // Convert string to boolean
          });
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const Submit = (ev) => {
    ev.preventDefault();

    // Convert boolean to string for submission
    const userData = {
      ...user,
      bersediaditempatkan: user.bersediaditempatkan.toString(),
    };

    if (user.id) {
      axiosClient
        .put(`/users/${user.id}`, userData)
        .then(() => {
          setNotification("User was successfully updated");
          navigate("/dashboard");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/users", userData)
        .then(() => {
          setNotification("User was successfully created");
          navigate("/dashboard");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      {user.id && (
        <div className=" p-2 text-[16px]">
          <b>Update User :</b> <br /> {user.email}
        </div>
      )}
      {!user.id && (
        <div className=" p-2 text-[16px]">
          <b>New Applicant</b>
        </div>
      )}
      <div className="card animated fadeInDown">
        {loading && <div className="text-center">Loading...</div>}
        {errors && (
          <div className="alert">
            {Object.keys(errors).map((key) => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}
        {!loading && (
          <form onSubmit={Submit} className="flex flex-col gap-2">
            <label>Posisi Yang Dilamar</label>
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.posisi}
              onChange={(ev) => setUser({ ...user, posisi: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Nama</label>
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.name}
              onChange={(ev) => setUser({ ...user, name: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>No. KTP</label>
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.noktp}
              onChange={(ev) => setUser({ ...user, noktp: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Tempat, Tanggal Lahir</label>
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.tempattanggallahir}
              onChange={(ev) =>
                setUser({ ...user, tempattanggallahir: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Jenis Kelamin</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.jeniskelamin}
              onChange={(ev) =>
                setUser({ ...user, jeniskelamin: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Agama</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.agama}
              onChange={(ev) => setUser({ ...user, agama: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Golongan Darah</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.goldarah}
              onChange={(ev) => setUser({ ...user, goldarah: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Status</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.status}
              onChange={(ev) => setUser({ ...user, status: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Alamat KTP</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.alamatktp}
              onChange={(ev) =>
                setUser({ ...user, alamatktp: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Alamat Tinggal</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.alamattinggal}
              onChange={(ev) =>
                setUser({ ...user, alamattinggal: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Email</label>{" "}
            <input
              type="email"
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.email}
              onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>No. Telp</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.notelp}
              onChange={(ev) => setUser({ ...user, notelp: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Orang terdekat yang dapat dihubungi</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.huborangterdekat}
              onChange={(ev) =>
                setUser({ ...user, huborangterdekat: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Pendidikan Terakhir</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.pendidikanterakhir}
              onChange={(ev) =>
                setUser({ ...user, pendidikanterakhir: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Riwayat Pelatihan</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.riwayatpelatihan}
              onChange={(ev) =>
                setUser({ ...user, riwayatpelatihan: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Riwayat Pekerjaan</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.riwayatpekerjaan}
              onChange={(ev) =>
                setUser({ ...user, riwayatpekerjaan: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Skill</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.skill}
              onChange={(ev) => setUser({ ...user, skill: ev.target.value })}
              placeholder="Insert Here ..."
            />
            <label>Bersedia Ditempatkan Diseluruh Kantor Perusahaan</label>
            <input
              type="checkbox"
              className="h-[20px] w-[20px]"
              checked={user.bersediaditempatkan}
              onChange={(ev) =>
                setUser({ ...user, bersediaditempatkan: ev.target.checked })
              }
            />
            <label>Penghasilan Yang Diharapkan</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              value={user.penghasilandiharap}
              onChange={(ev) =>
                setUser({ ...user, penghasilandiharap: ev.target.value })
              }
              placeholder="Insert Here ..."
            />
            <label>Password</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              type="password"
              onChange={(ev) => setUser({ ...user, password: ev.target.value })}
              placeholder="Password"
            />
            <label>Password Confirmation</label>{" "}
            <input
              className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
              type="password"
              onChange={(ev) =>
                setUser({ ...user, password_confirmation: ev.target.value })
              }
              placeholder="Password Confirmation"
            />
            <button className="my-5 flex items-center justify-center bg-[#85a236] py-4 px-10 rounded-[16px] text-[16px] text-white font-semibold hover:bg-[#9ec040]">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

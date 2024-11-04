import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";

function Dashboard() {
  const { user } = useStateContext();
  const navigate = useNavigate();

  return (
    <div className="pb-[100px]">
      <h1 className="px-5 pt-5 text-[24px] font-bold">Dashboard</h1>
      <h1 className="px-5 pb-5 text-[16px]">Welcome {user.email}</h1>
      <div className="card p-5">
        <h1 className="font-semibold pb-2">Your Detail Information :</h1>
        <form className="flex flex-col gap-2">
          <label>Posisi Yang Dilamar</label>
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.posisi}
            type="text"
            disabled
          />
          <label>Nama</label>
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.name}
            type="text"
            disabled
          />
          <label>No. KTP</label>
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.noktp}
            type="text"
            disabled
          />
          <label>Tempat, Tanggal Lahir</label>
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.tempattanggallahir}
            type="text"
            disabled
          />
          <label>Jenis Kelamin</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.jeniskelamin}
            type="text"
            disabled
          />
          <label>Agama</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.agama}
            type="text"
            disabled
          />
          <label>Golongan Darah</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.goldarah}
            type="text"
            disabled
          />
          <label>Status</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.status}
            type="text"
            disabled
          />
          <label>Alamat KTP</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.alamatktp}
            type="text"
            disabled
          />
          <label>Alamat Tinggal</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.alamattinggal}
            type="text"
            disabled
          />
          <label>Email</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.email}
            type="text"
            disabled
          />
          <label>No. Telp</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.notelp}
            type="text"
            disabled
          />
          <label>Orang terdekat yang dapat dihubungi</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.huborangterdekat}
            type="text"
            disabled
          />
          <label>Pendidikan Terakhir</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.pendidikanterakhir}
            type="text"
            disabled
          />
          <label>Riwayat Pelatihan</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.riwayatpelatihan}
            type="text"
            disabled
          />
          <label>Riwayat Pekerjaan</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.riwayatpekerjaan}
            type="text"
            disabled
          />
          <label>Skill</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.skill}
            type="text"
            disabled
          />
          <label>Bersedia Ditempatkan Diseluruh Kantor Perusahaan</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.bersediaditempatkan ? "Ya" : "Tidak"}
            type="text"
            disabled
          />
          <label>Penghasilan Yang Diharapkan</label>{" "}
          <input
            className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
            placeholder={user.penghasilandiharap}
            type="text"
            disabled
          />
        </form>
        <button
          onClick={() => navigate(`/users/` + user.id)}
          className="my-5 flex flex-row gap-2 items-center justify-center bg-[#85a236] py-4 px-10 rounded-[16px] text-[16px] text-white font-semibold hover:bg-[#9ec040]"
        >
          <FaEdit /> Edit
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

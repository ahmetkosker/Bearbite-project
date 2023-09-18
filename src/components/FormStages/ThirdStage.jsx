import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGnldQ3bDdq0x8vMRnNJQwu_jKmr9PvKY",
  authDomain: "bearbite-58056.firebaseapp.com",
  projectId: "bearbite-58056",
  storageBucket: "bearbite-58056.appspot.com",
  messagingSenderId: "1030150411452",
  appId: "1:1030150411452:web:f46b3ca4ed9a6abbb56cb9",
  measurementId: "G-YEEBM4SS89",
};

const app = initializeApp(firebaseConfig);

const ThirdStage = ({
  checkedRules,
  setCheckedRules,
  username,
  email,
  password,
  setPageNumber,
  passwordAgain,
  setUsername,
  setPassword,
  setPasswordAgain,
  isUsername,
  passwords,
  filling,
  setIsUsername,
  setPasswords,
  setFilling,
  setAlreadyInUse,
  setSuccess,
}) => {
  const handleSubmit = () => {
    const auth = getAuth(app);

    if (username === "" || password === "" || passwordAgain === "") {
      setFilling(true);
      setTimeout(() => {
        setFilling(false);
      }, 3000);
    } else if (username === "") {
      setIsUsername(true);
      setTimeout(() => {
        setIsUsername(false);
      }, 3000);
    } else if (password !== passwordAgain) {
      setPasswords(true);
      setTimeout(() => {
        setPasswords(false);
      }, 3000);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            setAlreadyInUse(true);
            setTimeout(() => {
              setAlreadyInUse(false);
            }, 3000);
          }
        });
    }
  };
  return (
    <section className="max-w-md w-[550px] h-[550px] px-12 pb-16 pt-10 bg-black rounded-lg text-white flex flex-col justify-between relative">
      <img
        onClick={() => setPageNumber(2)}
        src="https://play-lh.googleusercontent.com/RtPibaO3pLWP19YOoIZdsfMC8Ztl27BIFy4-bhAFxYo2rwglC1uK3dVO6EZp_gXepHs"
        className="w-12 absolute left-2 top-2 cursor-pointer"
      />
      <div className="flex flex-col justify-between h-1/2 mb-32">
        <div className="text-3xl mb-12 self-center font-medium">
          Kimliğini Oluştur
        </div>

        <div className="flex flex-col">
          <label className="text-xl mb-2">Kullanıcı Adı</label>
          <input
            className={`py-1.5 px-4 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-md bg-[#312E2D] border-2 transition-all duration-1000 ${
              isUsername || filling ? "border-red-500" : "border-blue-500"
            }`}
            type="text"
            placeholder="Kullanıcı Adını Seç"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-2">Şifre</label>
          <input
            className={`py-1.5 px-4 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-md bg-[#312E2D] border-2 transition-all duration-1000 ${
              passwords || filling ? "border-red-500" : "border-blue-500"
            }`}
            type="email"
            placeholder="E-Posta Adresini Yaz"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-2">Şifre Onay</label>
          <input
            className={`py-1.5 px-4 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-md bg-[#312E2D] border-2 transition-all duration-1000 ${
              filling || passwords ? "border-red-500" : "border-blue-500"
            }`}
            type="email"
            placeholder="E-Posta Adresini Yaz"
            value={passwordAgain}
            onChange={(e) => {
              setPasswordAgain(e.target.value);
            }}
          />
          <div
            className="flex items-center mt-6 gap-x-3"
            onClick={() => setCheckedRules((prev) => !prev)}
          >
            <input
              className="w-5 h-5 accent-[#464241]"
              type="checkbox"
              checked={checkedRules}
            />
            <label className="text-[#D9D9D9] opacity-60 text-base flex gap-x-5">
              Kabul ediyorum
              <span className="underline text-white">Kurallar & Koşullar</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2 relative top-4">
        <button
          onClick={() => handleSubmit()}
          disabled={!checkedRules}
          type="button"
          className={`w-full font-semibold transition-all duration-300 text-sm px-5 py-1.5 rounded-md text-center mr-2 mb-2 ${
            checkedRules
              ? "text-black bg-gradient-to-r from-[#E5B977] to-[#53412A] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer"
              : "bg-[#312E2D] bg-opacity-90 text-white cursor-not-allowed"
          }`}
        >
          Devam Et
        </button>
        <div className="opacity-50 underline hover:text-gray-500 transition-colors cursor-pointer">
          Bir hesabın var mı?
        </div>
      </div>
    </section>
  );
};

export default ThirdStage;

const FirstStage = ({
  checked,
  setChecked,
  email,
  setEmail,
  setPageNumber,
  isWarningAlertVisible,
  setIsWarningAlertVisible,
}) => {
  return (
    <section className="max-w-md w-[550px] h-[550px] px-12 pb-16 pt-10 bg-black rounded-lg text-white flex flex-col justify-between">
      <div className="flex flex-col justify-between h-1/2 mb-32">
        <div className="text-4xl mb-12 self-center font-medium flex relative">
          E-Posta Adresi Gir
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-2">E-Posta</label>
          <input
            className={`py-1.5 px-4 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-md bg-[#312E2D] border-2 transition-all duration-1000 ${
              isWarningAlertVisible ? "border-red-500" : "border-blue-500"
            }`}
            type="email"
            placeholder="E-Posta Adresini Yaz"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div
            className="flex items-center mt-6 gap-x-3"
            onClick={() => setChecked((prev) => !prev)}
          >
            <input
              className="w-12 h-12 accent-[#464241]"
              type="checkbox"
              checked={checked}
            />
            <label className="text-[#D9D9D9] opacity-60 text-lg">
              Haberler, özel teklifler, geribildirim anketleri ve oynanış testi
              davetleri al.
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <button
          onClick={() => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              setIsWarningAlertVisible(false);
              setPageNumber(2);
            } else {
              setIsWarningAlertVisible(true);
              setTimeout(() => {
                setIsWarningAlertVisible(false);
              }, 3000);
            }
          }}
          disabled={!checked}
          type="button"
          className={`w-full font-semibold transition-all duration-300 text-sm px-5 py-1.5 rounded-md text-center mr-2 mb-2 ${
            checked
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

export default FirstStage;

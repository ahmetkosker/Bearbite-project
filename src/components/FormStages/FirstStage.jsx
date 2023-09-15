import React from "react";

const FirstStage = ({ checked, setChecked }) => {
  console.log(checked);
  return (
    <section className="w-96 h-96 px-12 bg-black rounded-lg text-white flex flex-col justify-between">
      <div className="flex flex-col justify-between h-1/2">
        <div className="text-3xl">E-Posta Adresi Gir</div>
        <div className="flex flex-col">
          <label className="text-xl">E-Posta</label>
          <input
            className="p-1 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-sm bg-[#312E2D]"
            type="email"
            placeholder="E-Posta Adresini Yaz"
          />
          <div onClick={() => setChecked((prev) => !prev)}>
            <input type="checkbox" checked={checked} />
            <label>
              Haberler, özel teklifler, geribildirim anketleri ve oynanış testi
              davetleri al.
            </label>
          </div>
        </div>
      </div>
      <div>asdasd</div>
    </section>
  );
};

export default FirstStage;

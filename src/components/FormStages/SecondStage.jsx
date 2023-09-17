import { useState } from "react";

const SecondStage = ({
  phoneNumber,
  setPhoneNumber,
  setPageNumber,
  isPhoneNumberAlertVisible,
  setIsPhoneNumberAlertVisible,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();

    e.stopPropagation();

    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  const SelectedOne = ({ selected }) => {
    if (selected === 1) {
      return (
        <>
          <img
            src="https://www.olkando.com/wp-content/uploads/2016/09/cropped-tc-bayrak-1.png"
            alt="turkey"
            className="w-4 h-4 object-cover rounded-full mr-1.5"
          />
          +90
        </>
      );
    } else if (selected === 2) {
      return (
        <div className="flex">
          <img
            src="data:image/png;base64,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"
            alt="turkey"
            className="w-4 h-4 object-cover rounded-full mr-1.5"
          />
          +1
        </div>
      );
    } else if (selected === 3) {
      return (
        <div className="flex">
          <img
            src="https://media.istockphoto.com/id/1059005644/tr/vekt%C3%B6r/almanya-bayra%C4%9F%C4%B1-yuvarlak-parlak-rozet.jpg?s=170667a&w=0&k=20&c=eNXsbkFMfpURuzDLdWHePwXPTm8syLFIj_ELjZ27GZE="
            alt="turkey"
            className="w-4 h-4 object-cover rounded-full mr-1.5"
          />
          +49
        </div>
      );
    } else {
      return (
        <div className="flex">
          <img
            src="https://media.istockphoto.com/id/1059005726/tr/vekt%C3%B6r/italya-bayra%C4%9F%C4%B1-yuvarlak-parlak-rozet.jpg?s=170667a&w=0&k=20&c=gRUdgPhkwVeEO8-A1lVQ-AUORdmKkV9WzZTr3HTbIk0="
            alt="turkey"
            className="w-4 h-4 object-cover rounded-full mr-1.5"
          />
          +39
        </div>
      );
    }
  };
  return (
    <section className="max-w-md w-[550px] h-[550px] px-12 pb-16 pt-10 bg-black rounded-lg text-white flex flex-col justify-between relative">
      <img
        onClick={() => setPageNumber(1)}
        src="https://play-lh.googleusercontent.com/RtPibaO3pLWP19YOoIZdsfMC8Ztl27BIFy4-bhAFxYo2rwglC1uK3dVO6EZp_gXepHs"
        className="w-12 absolute left-2 top-2 cursor-pointer"
      />
      <div className="flex flex-col justify-evenly h-1/2 mb-32">
        <div className="text-3xl mb-12 self-center font-medium">
          Telefon Numaranı Ekle
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-2">Telefon Numarası</label>
          <div className="flex gap-x-2">
            <div className="flex flex-col relative">
              <button
                onClick={() => {
                  setOpen(true);
                }}
                id="states-button"
                data-dropdown-toggle="dropdown-states"
                class="flex-shrink-0 w-24 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-[#353131]  rounded-md"
                type="button"
              >
                <SelectedOne selected={selected} />
              </button>
              {open && (
                <div
                  id="dropdown-states"
                  class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[96px] dark:bg-[#312E2D] absolute top-10"
                >
                  <ul
                    class="py-2 text-sm text-white dark:text-gray-200"
                    aria-labelledby="states-button"
                  >
                    <li
                      onClick={() => {
                        setSelected(1);
                        setOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div class="inline-flex items-center">
                          <img
                            src="https://www.olkando.com/wp-content/uploads/2016/09/cropped-tc-bayrak-1.png"
                            alt="turkey"
                            className="w-4 h-4 object-cover rounded-full mr-1.5"
                          />
                          +90
                        </div>
                      </button>
                    </li>
                    <li
                      onClick={() => {
                        setSelected(2);
                        setOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            id="flag-icon-css-us"
                            viewBox="0 0 512 512"
                          >
                            <g fill-rule="evenodd">
                              <g stroke-width="1pt">
                                <path
                                  fill="#bd3d44"
                                  d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                                <path
                                  fill="#fff"
                                  d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                              </g>
                              <path
                                fill="#192f5d"
                                d="M0 0h98.8v70H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                transform="scale(3.9385)"
                              />
                            </g>
                          </svg>
                          +1
                        </div>
                      </button>
                    </li>
                    <li
                      onClick={() => {
                        setSelected(3);
                        setOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                          +49
                        </div>
                      </button>
                    </li>
                    <li
                      onClick={() => {
                        setSelected(4);
                        setOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fill-rule="evenodd" stroke-width="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                          +39
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <input
              className="py-1.5 px-4 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-md bg-[#312E2D] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="XXX XXX XXXX"
              onChange={(e) =>
                e.target.value.length <= 10 && setPhoneNumber(e.target.value)
              }
              value={phoneNumber}
              pattern="\d{3}\-\d{3}\-\d{4}"
              onWheel={numberInputOnWheelPreventChange}
              maxLength="10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <button
          disabled={phoneNumber.length === 0}
          type="button"
          className={`w-full font-semibold transition-all duration-300 text-sm px-5 py-1.5 rounded-md text-center mr-2 mb-2 ${
            phoneNumber.length !== 0
              ? "text-black bg-gradient-to-r from-[#E5B977] to-[#53412A] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer"
              : "bg-[#312E2D] bg-opacity-90 text-white cursor-not-allowed"
          }`}
          onClick={() => {
            if (phoneNumber.length === 10) {
              setPageNumber(3);
            } else {
              setIsPhoneNumberAlertVisible(true);
              setTimeout(() => {
                setIsPhoneNumberAlertVisible(false);
              }, 3000);
            }
          }}
        >
          Devam Et
        </button>
        <div
          onClick={() => {
            setPhoneNumber("");
            setPageNumber(3);
          }}
          className="opacity-50 underline hover:text-gray-500 transition-colors cursor-pointer"
        >
          Daha sonra ekle
        </div>
      </div>
    </section>
  );
};

export default SecondStage;

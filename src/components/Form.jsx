import { useState } from "react";
import FirstStage from "./FormStages/FirstStage";
import SecondStage from "./FormStages/SecondStage";
import ThirdStage from "./FormStages/ThirdStage";

import { initializeApp } from "firebase/app";

const Form = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [checked, setChecked] = useState(false);
  const [checkedRules, setCheckedRules] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [isWarningAlertVisible, setIsWarningAlertVisible] = useState(false);
  const [isPhoneNumberAlertVisible, setIsPhoneNumberAlertVisible] =
    useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [passwords, setPasswords] = useState(false);
  const [filling, setFilling] = useState(false);
  const [alreadyInUse, setAlreadyInUse] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-yellow-300 absolute top-12 mx-auto right-0 left-0 w-72 transition-all duration-1000  ${
          isWarningAlertVisible ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Uyarı!</span> Geçerli bir email adresi
          giriniz.
        </div>
      </div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-red-300 absolute top-12 mx-auto right-0 left-0 w-72 transition-all duration-1000  ${
          alreadyInUse ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Dikkat!</span> Bu e-posta adresi
          kullanımda
        </div>
      </div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-green-300 absolute top-12 mx-auto right-0 left-0 w-96 transition-all duration-1000  ${
          success ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Tebrikler!</span> Başarılı bir şekilde
          kayıt oldunuz.
        </div>
      </div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-yellow-300 absolute top-12 mx-auto right-0 left-0 w-80 transition-all duration-1000  ${
          isPhoneNumberAlertVisible ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Uyarı!</span> Geçerli bir telefon
          numarası giriniz.
        </div>
      </div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-yellow-300 absolute top-12 mx-auto right-0 left-0 w-80 transition-all duration-1000  ${
          isUsername ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Uyarı!</span> Kullanıcı adı boş
          bırakılmaz.
        </div>
      </div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-yellow-300 absolute top-12 mx-auto right-0 left-0 w-80 transition-all duration-1000  ${
          passwords ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Uyarı!</span> Şifreler uyuşmuyor.
        </div>
      </div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg z-50 bg-gray-800 text-yellow-300 absolute top-12 mx-auto right-0 left-0 w-80 transition-all duration-1000  ${
          filling ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Uyarı!</span> Boş bırakmayınız.
        </div>
      </div>
      {pageNumber === 1 ? (
        <FirstStage
          checked={checked}
          setChecked={setChecked}
          setPageNumber={setPageNumber}
          email={email}
          setEmail={setEmail}
          isWarningAlertVisible={isWarningAlertVisible}
          setIsWarningAlertVisible={setIsWarningAlertVisible}
        />
      ) : pageNumber === 2 ? (
        <SecondStage
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setPageNumber={setPageNumber}
          isPhoneNumberAlertVisible={isPhoneNumberAlertVisible}
          setIsPhoneNumberAlertVisible={setIsPhoneNumberAlertVisible}
        />
      ) : (
        <ThirdStage
          checked={checked}
          setChecked={setChecked}
          setPageNumber={setPageNumber}
          username={username}
          email={email}
          password={password}
          passwordAgain={passwordAgain}
          setUsername={setUsername}
          setPassword={setPassword}
          setPasswordAgain={setPasswordAgain}
          checkedRules={checkedRules}
          setCheckedRules={setCheckedRules}
          isUsername={isUsername}
          passwords={passwords}
          filling={filling}
          setIsUsername={setIsUsername}
          setPasswords={setPasswords}
          setFilling={setFilling}
          setAlreadyInUse={setAlreadyInUse}
          setSuccess={setSuccess}
        />
      )}
    </section>
  );
};

export default Form;

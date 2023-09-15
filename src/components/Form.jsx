import { useState } from "react";
import FirstStage from "./FormStages/FirstStage";

const Form = () => {
  const [checked, setChecked] = useState(false);

  return (
    <section>
      <FirstStage checked={checked} setChecked={setChecked} />
    </section>
  );
};

export default Form;

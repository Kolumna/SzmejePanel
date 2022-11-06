import FormWrapper from "./FormWrapper";

function AdressForm() {
  return (
    <FormWrapper title="Drugi Etap">
      <input
        className="input-text"
        placeholder="Miasto"
        autoFocus
        type="text"
      />
      <input className="input-text" placeholder="Adres" type="text" />
      <input className="input-text" placeholder="Adres2" type="text" />
    </FormWrapper>
  );
}

export default AdressForm;

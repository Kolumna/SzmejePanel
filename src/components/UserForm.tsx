import FormWrapper from "./FormWrapper";

function UserForm() {
  return (
    <FormWrapper title="Pierwszy etap">
      <input className="input-text" placeholder="Imię" autoFocus type="text" />
      <input className="input-text" placeholder="Nazwisko" type="text" />
    </FormWrapper>
  );
}

export default UserForm;

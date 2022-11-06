import FormWrapper from "./FormWrapper";

function AccountForm() {
  return (
    <FormWrapper title="Trzeci etap">
      <input
        className="input-text"
        placeholder="E-mail"
        autoFocus
        type="email"
      />
      <input className="input-text" placeholder="Hasło" type="password" />
    </FormWrapper>
  );
}

export default AccountForm;

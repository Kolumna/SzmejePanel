import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className=" text-center text-black font-bold text-6xl">
        {title}
      </h2>
      <div className=" flex flex-col gap-4">{children}</div>
    </>
  );
}

export default FormWrapper;

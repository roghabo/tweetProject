import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../lib/client/useMutation";

interface loginForm {
  email: string;
}

const login: NextPage = () => {
  const router = useRouter();
  const [login] = useMutation("/api/users/confirm");
  const { register, handleSubmit } = useForm<loginForm>();
  const onValid = (validForm: loginForm) => {
    login(validForm);
    router.push("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("email")} className="border mr-2" type="text" />
        <button className="bg-blue-300">Login</button>
      </form>
    </div>
  );
};

export default login;

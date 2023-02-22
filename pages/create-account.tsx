import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../lib/client/useMutation";

interface EnterForm {
  email: string;
}

const Enter: NextPage = () => {
  const router = useRouter();
  const [enter] = useMutation("/api/users/enter");
  const { register, handleSubmit } = useForm<EnterForm>();
  const onValid = (validForm: EnterForm) => {
    enter(validForm);
  };
  const onClick = () => {
    router.push("/log-in");
  }
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("email")} className="border mr-2" type="text" />
        <button className="bg-blue-300">create</button>
      </form>
      <div onClick={onClick} className="bg-red-400 w-12 cursor-pointer">Login</div>
    </div>
    
  );
};

export default Enter;

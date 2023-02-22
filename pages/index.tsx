import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useMutation from "../lib/client/useMutation";
import useUser from "../lib/client/useUser";

interface EnterForm {
  title: string;
  contents: string;
}

interface Tweet {
  id: number;
  title: string;
  contents: string;
}

interface TweetsRespone {
  ok: boolean;
  tweets: Tweet[];
}

export default () => 
{
  const [write] = useMutation("/api/tweets");
  const { data } = useSWR<TweetsRespone>("/api/tweets");
  const {} = useUser();
  const {register, handleSubmit} = useForm<EnterForm>();
  const onValid = (validForm:EnterForm) => {
    write(validForm);
  }
  return(
    <div>
      <h1>Tweeter</h1>
      <div className="w-full flex justify-center">      
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col w-1/3 mb-8">
          <div className="flex flex-col">
            <span>title</span>
            <input {...register('title')} className="border" />
          </div>
          <div className="flex flex-col">
            <span>contents</span>
            <textarea {...register('contents')} className="border"/>
          </div>
          <button className="bg-blue-300 mt-2">Write</button>
        </form>
      </div>
      
      <div className="w-full flex items-center flex-col">
        <h1 className="font-bold text-2xl">Tweets</h1>
        {data?.tweets?.map((tweet) => (
          <Link  key={tweet.id} href={`/tweets/${tweet.id}`}>
            <div className="flex flex-col w-1/3 mb-4 border cursor-pointer">
              <div>
                <span>Title: </span>
                <span>{tweet.title}</span>     
              </div>    
              <div>
                <span>Contents: </span>
                <span>{tweet.contents}</span>     
              </div>
            </div>
          </Link>   
        ))}
      </div>
    </div>
)};

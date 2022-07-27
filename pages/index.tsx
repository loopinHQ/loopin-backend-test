import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import TodoList from "../components/TodoList";
import { Todos } from "../models/Todo";

import { getTodos } from "../services/Todo";

const Home: NextPage = () => {
  const { data, error } = useSWR("/todos", getTodos);

  return (
    <div className="flex min-h-screen flex-col py-10 bg-slate-900 w-full items-center">
      <Head>
        <title>Loopin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/icon.svg"
        alt="Loopin logo"
        width={100}
        height={100}
        layout="fixed"
      />
      <div className="flex flex-col w-full mt-10 mx-4">
        <TodoList todos={data} />
      </div>
    </div>
  );
};

export default Home;

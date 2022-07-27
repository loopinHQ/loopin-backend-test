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
    <div className="flex min-h-screen flex-col py-10 bg-slate-900">
      <Head>
        <title>Loopin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-5xl mx-4 lg:mx-auto">
        <Image
          src="/icon.svg"
          alt="Loopin logo"
          width={100}
          height={100}
          layout="fixed"
          className="pb-10"
        />
        <TodoList todos={data} />
      </div>
    </div>
  );
};

export default Home;

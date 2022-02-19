import React from "react";
import Layout from "../components/Layout";
import useTitle from "../lib/use-title";

interface IErrorProps {
  status: number;
  message?: string;
}

const Error: React.FC<IErrorProps> = ({ status, message }: IErrorProps) => {
  useTitle(String(status));

  return (
    <div className="flex items-center justify-center h-full w-full px-5">
      <div className="bg-white w-full max-w-sm p-5 rounded-lg">
        <h1 className="font-bold text-2xl mb-3">{status}</h1>
        {message ? <p>{message}</p> : <p>An error occured</p>}
      </div>
    </div>
  );
};

// @ts-ignore
Error.layout = (page) => (
  <Layout links={[{ href: "/", label: "home" }]}>{page}</Layout>
);

export default Error;

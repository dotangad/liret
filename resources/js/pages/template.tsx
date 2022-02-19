import React from "react";
import Layout from "../components/Layout";
import useTitle from "../lib/use-title";

interface IPageProps {}

const Page: React.FC<IPageProps> = ({}: IPageProps) => {
  useTitle("Page");

  return (
    <div className="flex items-center justify-center h-full w-full px-5">
      <div className="bg-white w-full max-w-sm p-5 rounded-lg">Page</div>
    </div>
  );
};

// @ts-ignore
Page.layout = (page) => <Layout links={[]}>{page}</Layout>;

export default Page;

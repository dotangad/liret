import React from "react";
import Layout from "../../components/Layout";
import useTitle from "../../lib/use-title";

interface IAdminProps {}

const Admin: React.FC<IAdminProps> = ({}: IAdminProps) => {
  useTitle("Admin");

  return (
    <Layout links={[]}>
      <div className="flex items-center justify-center h-full w-full px-5">
        <div className="bg-white w-full max-w-sm p-5 rounded-lg">Admin</div>
      </div>
    </Layout>
  );
};

export default Admin;

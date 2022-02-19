import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";
import {
  SignInWithGithub,
  SignInWithGoogle,
} from "../../components/SocialButton";
import useTitle from "../../lib/use-title";
import TextInput from "../../components/TextInput";

const Register: React.FC = () => {
  useTitle("Register");

  const { data, setData, post, processing, errors } = useForm({
    email: "",
    name: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setData(e.target.name as any, e.target.value);

  return (
    <div className="flex items-center justify-center h-full w-full px-5">
      <div className="bg-white w-full max-w-sm p-5 rounded-lg">
        <div className="w-full flex items-center justify-start">
          <h1 className="text-xl font-bold">Register</h1>
        </div>

        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            post("/auth/register", {
              preserveState: true,
            });
          }}
        >
          <TextInput
            name="name"
            label="Name"
            placeholder="John Doe"
            type="text"
            className="my-4"
            value={data.name}
            disabled={processing}
            error={errors.name}
            onChange={handleChange}
          />

          <TextInput
            name="email"
            label="Email"
            placeholder="john@example.com"
            type="email"
            className="my-4"
            value={data.email}
            disabled={processing}
            error={errors.email}
            onChange={handleChange}
          />

          <TextInput
            name="password"
            label="Password"
            placeholder="sup3rs3cr3tp4ssw0rd"
            type="password"
            className="my-4"
            value={data.password}
            disabled={processing}
            error={errors.password}
            onChange={handleChange}
          />

          <div className="input-group my-4 container-flex-center">
            <div className="text-center text-sm text-gray-800">
              Already have an account?{" "}
              <Link className="font-semibold" href="/auth/login">
                Login
              </Link>
            </div>
          </div>

          <div className="input-group my-4 container-flex-center">
            <button
              type="submit"
              className="button w-full"
              disabled={processing}
            >
              Register
            </button>
          </div>
        </form>

        <div className="input-group my-4 text-md text-center font-bold text-gray-500">
          OR
        </div>

        <div className="input-group my-4">
          <SignInWithGithub />
        </div>

        <div className="input-group my-4">
          <SignInWithGoogle />
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
Register.layout = (page) => (
  <Layout links={[{ href: "/", label: "home" }]}>{page}</Layout>
);

export default Register;

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-lg mb-5">Please Sign Up to access my poetries.</div>
      <SignUp />
    </div>
  );
}

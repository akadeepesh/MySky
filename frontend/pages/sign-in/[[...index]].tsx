import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-lg mb-5">Please Sign In to access my poetries.</div>
      <SignIn />
    </div>
  );
}

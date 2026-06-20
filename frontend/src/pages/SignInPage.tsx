<<<<<<< HEAD
import { SigninForm } from "@/components/auth/signin-form";

const SignInPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 absolute inset-0 z-0 bg-gradient-purple">
      <div className="w-full max-w-sm md:max-w-4xl">
=======
import { SigninForm } from "../components/auth/signin-form";

const SignInPage = () => {
  return (
    <div className="app-surface flex min-h-svh flex-col items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        <SigninForm />
      </div>
    </div>
  );
};

export default SignInPage;

import SignIn from "@/app/pages/signin";
import SignUp from "@/app/pages/signup";
import { useRouter } from "next/router";

export default function AuthManagementPage() {
  const { authType } = useRouter().query;

  return (
    <div className="">{authType === "signin" ? <SignIn /> : <SignUp />}</div>
  );
}

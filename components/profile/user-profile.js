import { useSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useRouter } from "next/router";

function UserProfile() {
  // Redirect away if NOT auth
  const { data: session, status } = useSession();
  const router = useRouter();

  // console.log(session);
  // console.log(status);

  if (status === "loading") {
    return <p className={classes.profile}>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/auth");
    return null;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;

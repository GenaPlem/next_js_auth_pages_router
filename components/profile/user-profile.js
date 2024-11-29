import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  // const { data: session, status } = useSession();
  // const router = useRouter();

  // // console.log(session);
  // // console.log(status);

  // if (status === "loading") {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  // if (status === "unauthenticated") {
  //   router.replace("/auth");
  //   return null;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;

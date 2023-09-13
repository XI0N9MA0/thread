import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page(){
  const user = await currentUser();

  if(!user) return null;

  const userInfo = await fetchUser(user.id)

  if(!userInfo?.onboarded) redirect('/onboarding');

  return(
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={userInfo._id}/>

      <div className="mt-2 bg-white w-3 h-3">

      </div>
    </>
  )
}

export default Page;

import { getServerSession } from "next-auth";

import Form from "./components/Form";
import { redirect } from "next/navigation";

const page = async() => {
  const session = await getServerSession();
  if(!session){
    redirect("/auth/log-in")
  }


  return (
    <div className="w-11/12 max-w-[900px] mx-auto py-10">
      <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-10 text-center tracking-tight">
        Add New Product
      </h1>

      <Form/>
    </div>
  );
};

export default page;

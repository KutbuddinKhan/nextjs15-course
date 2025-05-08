"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const title = formData.get("title")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const url = formData.get("url")?.toString() || "";

  const data = await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user?.id ?? "",
      authorImage: user?.picture ?? "",
      authorName: user?.given_name ?? "",
    },
  });

  return redirect("/dashboard");
}

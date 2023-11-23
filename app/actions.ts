"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    todo: z.string().min(1),
  });
  const parse = schema.safeParse({
    todo: formData.get("todo"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;

  try {
    console.log("Todo Added");
    revalidatePath("/");
    return { message: `Fake: Added todo ${data.todo}` };
  } catch (e) {
    return { message: "Failed to create todo" };
  }
}

export async function deleteTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1),
    todo: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    todo: formData.get("todo"),
  });

  try {
    console.log("Todo deleted");
    revalidatePath("/");
    return { message: `Fake Deleted todo ${data.todo}` };
  } catch (e) {
    return { message: "Failed to delete todo" };
  }
}

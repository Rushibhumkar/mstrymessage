import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "ERROR", post }, { status: 404 });
    }
    return NextResponse.json({ message: "Ok", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
export const PUT = async (req: Request, res: Response) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, desc);
    return NextResponse.json(
      { message: "Ok", post: { title, desc } },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
export const DELETE = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({ message: "Ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

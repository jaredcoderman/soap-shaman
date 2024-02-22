import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { GetServerSidePropsContext } from "next";

export async function DELETE(
  request: Request,
  { params }: GetServerSidePropsContext
) {
  const { id } = params as { id: string }; // Explicitly specify the type of params
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  try {
    await prisma.userProducts.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

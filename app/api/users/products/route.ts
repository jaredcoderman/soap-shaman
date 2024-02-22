import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import prisma from "@/app/lib/prisma";
export async function GET() {
  const session = await getServerSession(authOptions)

  if(!session?.user?.email) return NextResponse.json({"error": "user not authenticated"}, {status: 401})
  const userCart = await prisma.userProducts.findMany({
    where: {
      userId: session.user.email
    },
    include: {
      product: true
    }
  })


  return NextResponse.json({userCart}, {status: 200})

}
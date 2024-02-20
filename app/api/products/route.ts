import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import prisma from "@/app/lib/prisma";

export async function GET() {
  
  const products = await prisma.product.findMany()
  return NextResponse.json({ products }, {status: 201})
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const body = await request.json()

  const email = session?.user?.email
  const product = body.product

  if(!email || !product.id) {
    return NextResponse.json({ "error": "not logged in!"}, {status: 401})
  }

  await prisma.userProducts.create({
    data: {
      userId: email,
      productId: product.id
    }
  })

  const products = await prisma.userProducts.findMany({
    where: {
      userId: email
    }
  })
  console.log(products.length)

  return NextResponse.json({ products }, {status: 200})
}
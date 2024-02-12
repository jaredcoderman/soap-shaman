import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

  const lemonYellow = await prisma.product.create({
    data: {
      name: "Lemon yellow",
      description: "A soft moisturizing soap for lemon lovers.",
      imageURL: "/yellow-bow.jpeg",
      price: 29.99
    }
  })
  const hydratingAqua = await prisma.product.create({
    data: {
      name: "Hydrating aqua",
      description: "A cool calming aqua",
      imageURL: "/aqua.jpg",
      price: 29.99
    }
  })
  const calmingPink = await prisma.product.create({
    data: {
      name: "Calming pink",
      description: "A relaxing calming pink soap",
      imageURL: "/pink.jpeg",
      price: 29.99
    }
  })
  const luxuryPurple = await prisma.product.create({
    data: {
      name: "Luxury purple",
      description: "A luxurious pretty lavender scented soap",
      imageURL: "/purple-bow.jpg",
      price: 29.99
    }
  })
  const relaxingYellow = await prisma.product.create({
    data: {
      name: "Relaxing yellow",
      description: "A yellow soap that is very relaxing",
      imageURL: "/yellow.jpeg",
      price: 29.99
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
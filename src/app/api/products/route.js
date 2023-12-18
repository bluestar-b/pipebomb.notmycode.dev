import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request) {
  try {
    const id = request.nextUrl.searchParams.get("id")

    if (id) {
      const result = await prisma.product.findUnique({
        where: {
          id: id,
        },
      })
      return Response.json(result)
    }

    const products = await prisma.product.findMany()
    const response = { products }
    return Response.json(response)
  } catch (error) {
    console.error("Error retrieving products:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

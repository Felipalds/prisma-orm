import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() => {
    await prisma.$connect()
    console.log("Connected to database!");

    await prisma.user.create({
        data: {
          name: 'Rich',
          email: 'hello@prisma.com',
          posts: {
            create: {
              title: 'My first post',
              body: 'Lots of really interesting stuff',
              slug: 'my-first-post',
            },
          },
        },
      })


    const users = await prisma.user.findMany()
    console.log(users);
    
    
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})

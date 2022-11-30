import { PrismaClient } from "@prisma/client";
import { links } from '../data/links';

const prisma = new PrismaClient();

async function main() {
    //create a admin user
    await prisma.user.create({
        data : {
            email : 'test1@gmail.com',
            role: "ADMIN"
        }
    })

    //create many links
    await prisma.link.createMany({
        data : links
    })
}

main()
.catch(e => {
    console.log(e);
    process.exit(1)
})
.finally(async ()=>{
    await prisma.$disconnect();
});
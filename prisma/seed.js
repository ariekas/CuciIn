const prisma = require('../src/config/dataBase')
const bcrypt = require('bcrypt')

async function main() {
    const randomPw = await bcrypt.hash('12345', 5)

    await prisma.user.upsert({
        where: { email: 'admin@laundry.com'},
        update : {},
        create : {
            username : 'admin',
            email : 'admin@laundry.com',
            password : randomPw,
            role : 'admin',
            is_active : true,
            email_verified: true
        }
    })

    console.log('Accout Admin Successfully Created')

}
main()
.then(() => prisma.$disconnect())
.catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
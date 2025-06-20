const prisma = require("../config/dataBase");
const bcrypt = require("bcrypt");
const { pickFields } = require("../utils/pickFields");
function validateRole(role) {
    const allowedRoles = ['kurir', 'penjaga'];
    if (!allowedRoles.includes(role)) {
      throw new Error(`Role must be one of: ${allowedRoles.join(', ')}`);
    }
  }

  async function checkUser({ email, username }) {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });
    if (existing) {
      throw new Error('Email or Username already exists');
    }
  }

exports.create = async ({ username, email, password, role }) => {
   validateRole(role);

   await checkUser({email, username})

   const hashPassword = await bcrypt.hash(password,10)

   const user = await prisma.user.create({
    data:{
        username,
        email,
        password: hashPassword,
        role
    }
   })

   return pickFields(user, ['id', 'username', 'email', 'role'])
}

exports.getAll = async () => {
   const users = await prisma.user.findMany({
    where:{role:{in:['kurir', 'pelanggan']}},
    select:{
        id:true,
        username:true,
        email:true,
        role:true   
    }
   })

   return users
}

exports.edit = async (id, data) => {
const allowedFields = ['username', 'email', 'role']
const update = pickFields(data, allowedFields)

const user = await prisma.user.update({
    where:{id},
    data:update
})

return pickFields(user, ['id', 'username', 'email', 'role'])
}

exports.delete = async (id) => {
await prisma.user.delete({
    where:{id}
})
}
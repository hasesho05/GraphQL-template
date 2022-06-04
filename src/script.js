//データベースにアクセスするためのクライアントライブラリ

//ライブラリからインポート
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function main() {
  //linkは自分で設定したモデル
  const newLink = await prisma.link.create({
    data: {
      description: "GraphQLを学ぶ",
      url: "www.google.com",
    }
  });
  //全てのデータを取ってくる
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

main()
.catch((e) => {
  throw e;
})
.finally(async () => {　//最後に必ずする
  prisma.$disconnect;
})
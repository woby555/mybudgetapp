import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const userId = parseInt(session.user.id);

  const categories = await prisma.categories.findMany({
    where: { user_id: userId },
    orderBy: { created_at: "desc" },
  });

  res.status(200).json(categories);
}

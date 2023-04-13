import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cities = await prisma.city.findMany({
    select: {
      CityID: true,
      CityName: true,
      Country: {
        select: {
          ConID: true,
          ConName: true,
        },
      },
    },
  });
  res.status(200).json(cities);
}

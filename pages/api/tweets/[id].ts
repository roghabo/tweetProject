import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const tweet = await client.tweet.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
  console.log(tweet);
  res.json({ ok: true, tweet });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
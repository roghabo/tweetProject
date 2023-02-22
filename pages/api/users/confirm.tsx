import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";
import { withApiSession } from "../../../lib/server/withSession";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  const foundUser = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (!foundUser) return res.status(404).end();
  req.session.user = {
    id: foundUser.id,
  };
  await req.session.save();
  res.json({ ok: true });
}

export default withApiSession(
    withHandler({ methods: ["POST"], handler, isPrivate: false })
  );
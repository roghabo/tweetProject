import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {

    if (req.method === "GET") {
        const tweets = await client.tweet.findMany({});
        res.json({
          ok: true,
          tweets,
        });
      }
      if (req.method === "POST") {
        const {
            body: { title, contents },
            session: { user },
          } = req;
          const tweet = await client.tweet.create({
            data: {
              title,
              contents,
              user: {
                connect: {
                  id: user?.id,
                },
              },
            },
          });
          console.log(tweet);
          res.json({
            ok: true
          });
        }
    }
    

    
  

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
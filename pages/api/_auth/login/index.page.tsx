import { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        // scope: [],
        redirect_uri: process.env.APP_URL + "/_auth/login/callback",
        state: "abcd",
      })
  );
}

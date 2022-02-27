import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { stringify } from "querystring";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code;

  if (typeof code !== "string") {
    res.status(401).send("Missing query param: code");
    return;
  }

  try {
    const resp = await axios.post<{
      access_token: string;
      token_type: "Bearer";
      scope: string;
      expires_in: 3600;
      refresh_token: string;
    }>(
      "https://accounts.spotify.com/api/token",
      stringify({
        code,
        grant_type: "authorization_code",
        redirect_uri: process.env.APP_URL + "/_auth/login/callback",
      }),
      {
        headers: {
          authorization:
            "Basic " +
            new Buffer(
              process.env.SPOTIFY_CLIENT_ID +
                ":" +
                process.env.SPOTIFY_CLIENT_SECRET
            ).toString("base64"),
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(resp.data);
  } catch (err) {
    res
      .status(401)
      .send("Something went wrong fetching a token from Spotify..");
    return;
  }
}

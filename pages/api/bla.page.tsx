import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

const manca = "spotify:user:tglgxws4yyvfmdrobfehvghbs";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { accessToken } = await getWebAccessToken(process.env.SP_DC);
  const friendActivity = await getFriendActivity(accessToken);

  const friend = friendActivity.friends.find((d) => d.user.uri === manca);
  if (friend) {
    res.send(friend);
  } else {
    res.status(500).send("Sad times!");
  }
}

async function getWebAccessToken(spDcCookie: string) {
  const res = await fetch(
    "https://open.spotify.com/get_access_token?reason=transport&productType=web_player",
    {
      headers: {
        Cookie: `sp_dc=${spDcCookie}`,
      },
    }
  );

  const data = await res.json();

  return data as any;
}

async function getFriendActivity(webAccessToken) {
  // Looks like the app now uses `https://spclient.wg.spotify.com/presence-view/v1/buddylist`
  // but both endpoints appear to be identical in the kind of token they accept
  // and the response format.
  const res = await fetch(
    "https://guc-spclient.spotify.com/presence-view/v1/buddylist",
    {
      headers: {
        Authorization: `Bearer ${webAccessToken}`,
      },
    }
  );

  const data = await res.json();

  return data as any;
}

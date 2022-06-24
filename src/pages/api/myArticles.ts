import { responseTypes } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface articleResponse extends responseTypes {
  data?: any[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<articleResponse>
) {
  try {
    const result = await axios.get(
      "https://dev.to/api/articles/me/published?per_page=4",
      {
        headers: {
          "api-key": process.env.DEVBLOG_API_KEY,
        },
      }
    );

    res.json({ status: "Success", message: "", data: result.data });
    console.log(result.data);
  } catch (error) {
    console.log(error);
    res.json({ status: "Failed", message: "Failed" });
  }
}

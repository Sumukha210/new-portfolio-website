// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { saveDataToSpreadSheet, verifyRecaptcha } from "@/utils/Api";
import { responseTypes } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseTypes>
) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const token = req.body.token;

    const response = await verifyRecaptcha(token);
    console.log("ReCaptcha response", response);

    if (response.data.success && response.data.score >= 0.5) {
      const date = new Date();

      // sendMail(name, email, message);
      await saveDataToSpreadSheet([
        name,
        email,
        message,
        date.toDateString(),
        date.toLocaleTimeString(),
      ]);

      return res.status(200).json({
        status: "Success",
        message: "Thank you for reaching out to me.",
      });
    } else {
      return res.json({
        status: "Failed",
        message: "Something went wrong, please try again!!!",
      });
    }
  } catch (error) {
    console.log("ERRRRROr", error);
    res.json({
      status: "Failed",
      message: "Something went wrong, please try again!!!",
    });
  }
}

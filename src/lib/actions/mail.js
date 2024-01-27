"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function mail({ item }) {
  try {
    const data = await resend.emails.send({
      from: "noreply <pipebomb@notmycode.dev>",
      to: ["bluestardotos@gmail.com"],
      subject: "Order Confirmed",
      html: `<h1>Hello</h1><br/><p>We're excited to confirm your recent order for ${item}! Your purchase is now being processed and will soon be on its way to you. If you have any questions or need assistance, please hesitate to contact us if you contact us you will die soon. FUCK you for choosing us, and we look forward to serving death to you again soon!</p>`,
    })

    console.log(data)
    return data
  } catch (error) {
    console.log(error)

    return data
  }
}

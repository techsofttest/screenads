import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    // SMTP configuration
    const host = process.env.MAIL_HOST;
    const port = Number(process.env.MAIL_PORT || 587);
    const username = process.env.MAIL_USERNAME;
    const password = process.env.MAIL_PASSWORD;
    const encryption = (process.env.MAIL_ENCRYPTION || "").toLowerCase();

    const fromAddress = process.env.MAIL_FROM_ADDRESS || username;
    const fromName = process.env.MAIL_FROM_NAME || "Screen Ads";
    const recipient = process.env.CONTACT_EMAIL || "Screenads2021@gmail.com";

    if (!host || !username || !password || !fromAddress) {
      console.error("Contact email SMTP configuration is incomplete.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please try again later.",
        },
        { status: 500 },
      );
    }

    // Create mail transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: encryption === "ssl" || port === 465,
      requireTLS: encryption === "tls",
      auth: {
        user: username,
        pass: password,
      },
    });

    // Escape user input for HTML email
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

    // Send email
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: recipient,
      replyTo: email,
      subject: `New Contact Enquiry - ${name}`,

      text: `
            New contact enquiry from Screen Ads website

            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Service Interested In: ${service}

            Requirements:
            ${message}
          `,

      html: `
            <div style="margin: 0; padding: 30px 15px; background-color: #f4f4f4; font-family: Arial, Helvetica, sans-serif; color: #212121;">
              <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5;">

                <!-- HEADER -->
                <div style="padding: 28px 32px; background-color: #212121;">
                  <h2 style="margin: 0; color: #ffffff; font-size: 23px; font-weight: 700; letter-spacing: 1px;">
                    SCREEN ADS
                  </h2>
                  <p style="margin: 8px 0 0; color: #d1d1d1; font-size: 13px;">
                    New Website Contact Enquiry
                  </p>
                </div>

                <!-- INTRODUCTION -->
                <div style="padding: 28px 32px 15px;">
                  <h3 style="margin: 0 0 8px; font-size: 20px; color: #212121;">
                    New Enquiry Received
                  </h3>
                  <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #666666;">
                    A new contact enquiry has been submitted through the Screen Ads website.
                    Here are the submitted details.
                  </p>
                </div>

                <!-- CONTACT DETAILS -->
                <div style="padding: 15px 32px 25px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
                    style="width: 100%; border-collapse: collapse; border: 1px solid #e8e8e8;">

                    <tr>
                      <td colspan="2"
                        style="padding: 13px 16px; background-color: #f5f5f5; border-bottom: 1px solid #e8e8e8;">
                        <strong style="font-size: 13px; color: #212121; text-transform: uppercase; letter-spacing: 1px;">
                          Contact Information
                        </strong>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%" style="padding: 14px 16px; border-bottom: 1px solid #eeeeee; color: #777777; font-size: 13px;">
                        Name
                      </td>
                      <td style="padding: 14px 16px; border-bottom: 1px solid #eeeeee; color: #212121; font-size: 14px; font-weight: 600;">
                        ${safeName}
                      </td>
                    </tr>

                    <tr>
                      <td width="35%" style="padding: 14px 16px; border-bottom: 1px solid #eeeeee; color: #777777; font-size: 13px;">
                        Email Address
                      </td>
                      <td style="padding: 14px 16px; border-bottom: 1px solid #eeeeee; color: #212121; font-size: 14px; word-break: break-word;">
                        ${safeEmail}
                      </td>
                    </tr>

                    <tr>
                      <td width="35%" style="padding: 14px 16px; border-bottom: 1px solid #eeeeee; color: #777777; font-size: 13px;">
                        Phone Number
                      </td>
                      <td style="padding: 14px 16px; border-bottom: 1px solid #eeeeee; color: #212121; font-size: 14px; font-weight: 600;">
                        ${safePhone}
                      </td>
                    </tr>

                    <tr>
                      <td width="35%" style="padding: 14px 16px; color: #777777; font-size: 13px;">
                        Service Interested In
                      </td>
                      <td style="padding: 14px 16px; color: #212121; font-size: 14px; font-weight: 600;">
                        ${safeService}
                      </td>
                    </tr>

                  </table>
                </div>

                <!-- REQUIREMENTS -->
                <div style="padding: 0 32px 30px;">
                  <h3 style="margin: 0 0 12px; font-size: 15px; color: #212121;">
                    Project Requirements
                  </h3>

                  <div style="padding: 18px; background-color: #f7f7f7; border-left: 4px solid #212121; border-radius: 4px; color: #555555; font-size: 14px; line-height: 1.8; overflow-wrap: break-word;">
                    ${safeMessage}
                  </div>
                </div>

                <!-- FOOTER -->
                <div style="padding: 20px 32px; background-color: #f5f5f5; border-top: 1px solid #e8e8e8; text-align: center;">
                  <p style="margin: 0; color: #777777; font-size: 12px; line-height: 1.6;">
                    This enquiry was submitted through the
                    <strong style="color: #212121;">Screen Ads</strong> website.
                  </p>
                </div>

              </div>
            </div>
          `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry. Please try again later.",
      },
      { status: 500 },
    );
  }
}

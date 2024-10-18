// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const formEmail = process.env.FORM_EMAIL;
export async function POST(req, res) {

    const { body } = await req;
    const { email, subject, message } = body;
    console.log("**********",body)
    try {
        const { data, error } = await resend.emails.send({
            from: formEmail,
            to: ['rajaniyadav9969@gmail.com', email],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });

        // if (error) {
        //     return Response.json({ error }, { status: 500 });
        // }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
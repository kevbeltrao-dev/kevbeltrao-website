import * as emailjs from 'emailjs-com';

interface FormFields {
  name: string;
  email: string;
  company: string;
  message: string;
}

const sendEmail = async (
  data: FormFields,
  successCallback: () => void,
  failCallback: (errorMessage: string) => void,
) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
      data as unknown as Record<string, unknown> | undefined,
      process.env.NEXT_PUBLIC_EMAIL_USER_ID!,
    );

    successCallback();
  } catch (error: unknown) {
    failCallback('Something went wrong.');
  }
};

export default sendEmail;

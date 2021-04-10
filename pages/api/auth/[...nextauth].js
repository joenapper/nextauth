import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    // Providers.GitHub({
    //   clientId: "",
    //   clientSecret: "",
    // }),
    // Providers.Twitter({
    //   clientId: "",
    //   clientSecret: "",
    // }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true, //SET TO FALSE ON PROD
  },
};

export default (req, res) => NextAuth(req, res, options);

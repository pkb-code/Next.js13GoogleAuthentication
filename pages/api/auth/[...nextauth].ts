import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

// Initialize NextAuth

const client = process.env.AZURE_AD_CLIENT_ID || ''
const secret = process.env.AZURE_AD_CLIENT_SECRET || ''
const tenant = process.env.AZURE_AD_TENANT_ID || ''

export default NextAuth({
    providers: [
        AzureADProvider({
            name: 'AzureAD',
            clientId: client,
            clientSecret: secret,
            tenantId: tenant
          })
    ]
})
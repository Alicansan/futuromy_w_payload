// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { en } from "@payloadcms/translations/languages/en";
import { tr } from "@payloadcms/translations/languages/tr";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { BlogPosts } from "./collections/BlogPosts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, BlogPosts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  i18n: {
    supportedLanguages: { en, tr },
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
      authToken: process.env.DATABASE_AUTH_TOKEN!,
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    uploadthingStorage({
      collections: {
        [Media.slug]: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || "",
        acl: "public-read",
      },
    }),
  ],
});

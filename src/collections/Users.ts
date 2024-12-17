import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      defaultValue: "User",
      name: "displayName",
      type: "text",
      required: true,
    },
  ],
};

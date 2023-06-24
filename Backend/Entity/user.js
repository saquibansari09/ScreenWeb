import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User", // Will use table name `category` as default behaviour.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    CompanyName: {
      type: "varchar",
    },

    MailingName: {
      type: "varchar",
    },
    Address: {
      type: "varchar",
    },
    State: {
      type: "varchar",
    },
    Country: {
      type: "varchar",
    },
    Pincode: {
      primary: true,
      type: "int",
      generated: true,
    },
    State: {
      type: "varchar",
    },
    Telephone: {
      type: "varchar",
    },

    Mobile: {
      type: "varchar",
    },
    Fax: {
      type: "varchar",
    },
    Email: {
      type: "varchar",
    },
    Website: {
      type: "varchar",
    },
  },
});

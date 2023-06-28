import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User", // Will use table name `category` as default behaviour.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    copanyname: {
      type: "varchar",
      nullable: true,
    },

    mailingname: {
      type: "varchar",
      nullable: true,
    },
    address: {
      type: "varchar",
      nullable: true,
    },
    state: {
      type: "varchar",
      nullable: true,
    },
    country: {
      type: "varchar",
      nullable: true,
    },
    pincode: {
      type: "varchar",
      nullable: true,
    },

    telephone: {
      type: "varchar",
      nullable: true,
    },

    mobile: {
      type: "varchar",
      nullable: true,
    },
    fax: {
      type: "varchar",
      nullable: true,
    },
    email: {
      type: "varchar",
      nullable: true,
    },
    website: {
      type: "varchar",
      nullable: true,
    },
  },
});

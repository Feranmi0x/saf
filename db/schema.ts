import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  month: text("month"),
  day: text("day"),
  year: text("year"),
  pledgeReminder: boolean("pledge_reminder").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  amount: integer("amount").notNull(),
  frequency: text("frequency").notNull(), // "once" or "monthly"
  contactEmail: boolean("contact_email").default(false).notNull(),
  contactText: boolean("contact_text").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
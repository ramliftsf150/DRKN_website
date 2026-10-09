import { z } from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least two characters.")
    .max(100),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  business: z
    .string()
    .trim()
    .min(2, "Please enter your business name.")
    .max(160),
  phone: z.string().trim().max(40).optional().default(""),
  package: z.enum([
    "Not sure yet",
    "Launch",
    "Growth",
    "Pro",
    "Custom",
    "Website Care",
  ]),
  budget: z.enum([
    "Not sure yet",
    "Under $500",
    "$500–$1,000",
    "$1,000–$2,000",
    "$2,000+",
  ]),
  details: z
    .string()
    .trim()
    .min(20, "Tell us a little more (at least 20 characters).")
    .max(5000, "Please keep your project details under 5,000 characters."),
  website: z.string().max(200).optional().default(""),
});

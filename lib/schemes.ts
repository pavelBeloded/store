import { z } from "zod";

export const ReviewSchema = z.object({
  rating: z.number(),
  comment: z.string(),
  date: z.iso.datetime(),
  reviewerName: z.string(),
  reviewerEmail: z.email(),
});

const DimensionsSchema = z.object({
  width: z.number(),
  height: z.number(),
  depth: z.number(),
});

const MetaSchema = z.object({
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  barcode: z.string(),
  qrCode: z.url(),
});

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string().optional(),
  sku: z.string(),
  weight: z.number(),
  dimensions: DimensionsSchema,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(ReviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
  meta: MetaSchema,
  images: z.array(z.url()),
  thumbnail: z.url(),
});

export const ProductCardSchema = ProductSchema.pick({
  id: true,
  title: true,
  price: true,
  thumbnail: true,
});

export const ProductDetailSchema = ProductSchema.pick({
  id: true,
  title: true,
  description: true,
  category: true,
  price: true,
  discountPercentage: true,
  rating: true,
  stock: true,
  brand: true,
  sku: true,
  weight: true,
  dimensions: true,
  warrantyInformation: true,
  shippingInformation: true,
  availabilityStatus: true,
  reviews: true,
  returnPolicy: true,
  images: true,
  thumbnail: true,
});

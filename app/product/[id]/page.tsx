import { getProductById } from "@/lib/actions";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { AddToCartButton } from "@/components/ui/home/add-to-cart-button";
import { BackButton } from "@/components/ui/back-button";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductById(id);

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="relative aspect-square border rounded-md overflow-hidden bg-muted"
              >
                <Image
                  src={img}
                  alt={`${product.title} ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <Badge variant="outline" className="w-fit mb-2 capitalize">
            {product.category}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center text-yellow-500">
              <Star className="fill-current w-5 h-5" />
              <span className="ml-1 font-bold text-black">
                {product.rating}
              </span>
            </div>
            <span className="text-muted-foreground text-sm">
              SKU: {product.sku}
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-4">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-xl text-muted-foreground line-through">
              ${originalPrice}
            </span>
            <Badge className="bg-green-600">
              -{product.discountPercentage}%
            </Badge>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
              }}
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              {product.availabilityStatus} — {product.stock} items left
            </p>
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="w-5 h-5 text-muted-foreground" />
              <span>{product.shippingInformation}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="w-5 h-5 text-muted-foreground" />
              <span>{product.warrantyInformation}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RotateCcw className="w-5 h-5 text-muted-foreground" />
              <span>{product.returnPolicy}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.reviews.map((review, i) => (
            <div key={i} className="p-4 border rounded-lg bg-card shadow-sm">
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {Array.from({ length: 5 }).map((_, starI) => (
                  <Star
                    key={starI}
                    className={`w-4 h-4 ${starI < review.rating ? "fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="italic text-sm">{'"' + review.comment + '"'}</p>
              <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
                <span className="font-bold">{review.reviewerName}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

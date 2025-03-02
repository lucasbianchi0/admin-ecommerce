import { ProductDetail } from "@/components/product-detail"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProductPage({ params }: { params: { code: string } }) {
  return (
    <main className="p-6">
      <Link href="/">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </Link>
      <ProductDetail code={params.code} />
    </main>
  )
}


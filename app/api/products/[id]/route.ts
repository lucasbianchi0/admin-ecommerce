import { NextResponse } from "next/server"
import type { Product } from "@/types/product"

// Mock data for demonstration purposes
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Smartphone XYZ",
    brand: "TechBrand",
    subBrand: "Premium",
    category: "Electrónicos",
    code: "TECH-001",
    sku: "SM-XYZ-001",
    ean: "1234567890123",
    upc: "012345678901",
    description: "Smartphone de última generación con cámara de alta resolución",
    fullDescription:
      "<p>Smartphone de última generación con las siguientes características:</p><ul><li>Pantalla OLED de 6.5 pulgadas</li><li>Cámara de 108MP</li><li>Batería de 5000mAh</li></ul>",
    attributes: [
      { name: "Color", value: "Negro" },
      { name: "Almacenamiento", value: "128GB" },
      { name: "RAM", value: "8GB" },
    ],
    images: [
      { url: "/placeholder.svg", alt: "Smartphone XYZ - Vista frontal" },
      { url: "/placeholder.svg", alt: "Smartphone XYZ - Vista trasera" },
    ],
    stock: 45,
    currency: "USD",
    price: 799.99,
    iva: 152.0,
    importTax: 80.0,
  },
  {
    id: "2",
    name: "Laptop Pro",
    brand: "ComputerCo",
    subBrand: "Business",
    category: "Computadoras",
    code: "COMP-002",
    sku: "LP-PRO-002",
    ean: "2345678901234",
    upc: "123456789012",
    description: "Laptop profesional para trabajo y diseño",
    fullDescription: "<p>Laptop profesional con procesador de última generación y tarjeta gráfica dedicada.</p>",
    attributes: [
      { name: "Procesador", value: "Intel i7" },
      { name: "RAM", value: "16GB" },
      { name: "Almacenamiento", value: "512GB SSD" },
    ],
    images: [
      { url: "/placeholder.svg", alt: "Laptop Pro - Vista frontal" },
      { url: "/placeholder.svg", alt: "Laptop Pro - Vista lateral" },
    ],
    stock: 12,
    currency: "USD",
    price: 1299.99,
    iva: 247.0,
    importTax: 130.0,
  },
  {
    id: "3",
    name: "Auriculares Inalámbricos",
    brand: "AudioTech",
    subBrand: "Comfort",
    category: "Audio",
    code: "AUDIO-003",
    sku: "AUR-WL-003",
    ean: "3456789012345",
    upc: "234567890123",
    description: "Auriculares inalámbricos con cancelación de ruido",
    fullDescription:
      "<p>Auriculares inalámbricos con tecnología de cancelación de ruido activa y batería de larga duración.</p>",
    attributes: [
      { name: "Color", value: "Blanco" },
      { name: "Duración de batería", value: "30 horas" },
      { name: "Conectividad", value: "Bluetooth 5.0" },
    ],
    images: [{ url: "/placeholder.svg", alt: "Auriculares - Vista frontal" }],
    stock: 78,
    currency: "USD",
    price: 199.99,
    iva: 38.0,
    importTax: 20.0,
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 })
  }

  return NextResponse.json(product)
}


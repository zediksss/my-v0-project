"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Хризантемы",
    price: "от 250р",
    image: "/one.png",
    description:
      "я пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидоря пидор",
  },
  {
    id: 2,
    name: "Хризантемы",
    price: "от 250р",
    image: "/two.png",
    description:
      "Белые хризантемы премиум качества. Долго сохраняют свежесть и красоту. Отличный выбор для особых случаев.",
  },
  {
    id: 3,
    name: "Хризантемы",
    price: "от 250р",
    image: "/three.png",
    description: "Желтые хризантемы, символ радости и солнца. Яркие и жизнерадостные цветы для поднятия настроения.",
  },
  {
    id: 4,
    name: "Хризантемы",
    price: "от 250р",
    image: "/four.png",
    description: "Нежные розовые хризантемы. Романтичные и элегантные цветы для создания особой атмосферы.",
  },
  {
    id: 5,
    name: "Хризантемы",
    price: "от 250р",
    image: "/five.png",
    description: "Фиолетовые хризантемы редких сортов. Необычный цвет и изысканная красота для ценителей.",
  },
  {
    id: 6,
    name: "Хризантемы",
    price: "от 250р",
    image: "/six.png",
    description: "Красные хризантемы, символ страсти и любви. Яркие и выразительные цветы для особых моментов.",
  },
]

export default function TelegramMiniApp() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex items-center gap-2 mb-6 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Назад</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={selectedProduct.image || "/placeholder.svg"}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h1>
              <p className="text-xl font-semibold text-pink-600 mb-4">{selectedProduct.price}</p>
              <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 pt-4">
          <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
            <span className="text-2xl">🌸</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">GreenFlora</h1>
            <p className="text-sm text-gray-600">ассортимент</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

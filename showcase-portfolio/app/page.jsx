import BackgroundChanger from "@/app/components/background/page";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";

const gradients = [
  "from-black via-gray-900 via-blue-700 via-blue-600 to-blue-400",
  "from-black via-gray-900 via-orange-700 via-orange-600 to-orange-400",
  "from-black via-gray-900 via-yellow-700 via-yellow-600 to-yellow-400",
  "from-black via-gray-900 via-purple-700 via-purple-600 to-purple-400",
];

const portfolioItems = [
  {
    id: 1,
    label: "Featured",
    title: "Modern Web Applications",
    description: "Crafting seamless digital experiences through innovative web solutions. Specializing in responsive design and interactive user interfaces that engage and delight users across all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    id: 2,
    label: "Responsive",
    title: "Mobile-First Development",
    description: "Building progressive web applications with a mobile-first approach. Creating adaptive layouts that provide optimal user experience across all screen sizes.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    id: 3,
    label: "Scalable",
    title: "Cloud Architecture",
    description: "Designing scalable cloud solutions that power modern applications. Expertise in serverless architecture and microservices deployment for optimal performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=800",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Achtergrond die verandert */}
      <BackgroundChanger gradients={gradients} interval={5000} />

      {/* Portfolio Sectie */}
      <main className="relative z-10 min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">My Portfolio</h1>
          <PortfolioSection items={portfolioItems} />
        </div>
      </main>
    </div>
  );
}

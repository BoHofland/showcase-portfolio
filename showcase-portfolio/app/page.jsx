import BackgroundChanger from "@/app/components/background/page";

export default function HomePage() {
  const gradients = [
    "from-black via-gray-900 via-blue-700 via-blue-600 to-blue-400",
    "from-black via-gray-900 via-orange-700 via-orange-600 to-orange-400",
    "from-black via-gray-900 via-yellow-700 via-yellow-600 to-yellow-400",
    "from-black via-gray-900 via-purple-700 via-purple-600 to-purple-400",
  ];

  return <BackgroundChanger gradients={gradients} interval={5000} />;
}

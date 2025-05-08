import { prisma } from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    }
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  console.log('Data:', data);
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        Latest Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.content.slice(0, 100)}...</p>
            <div className="mt-2 text-sm text-gray-500">
              By {item.authorName}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

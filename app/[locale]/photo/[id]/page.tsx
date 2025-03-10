"use client";

export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={`https://picsum.photos/id/${params.id}/600/400`}
          alt="Photo"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

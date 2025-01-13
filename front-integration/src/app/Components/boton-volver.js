import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BotonVolver() {
  return (
    <Link href="/usuarios" className="inline-block">
      <button className="p-2 bg-blue-500 rounded-full hover:bg-blue-600">
        <ArrowLeft size={24} className="text-white" />
      </button>
    </Link>
  );
}
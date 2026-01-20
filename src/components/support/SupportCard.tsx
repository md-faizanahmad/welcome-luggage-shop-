import { ChevronDown } from "lucide-react";

interface SupportCardProps {
  question: string;
  answer: string;
}

export default function SupportCard({ question, answer }: SupportCardProps) {
  return (
    <div className="border-b border-slate-200">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between py-5 text-slate-900 transition-colors hover:text-blue-600">
          <h3 className="text-base sm:text-lg font-bold leading-tight select-none">
            {question}
          </h3>

          <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180">
            <ChevronDown className="h-5 w-5 text-slate-500 group-hover:text-blue-600" />
          </span>
        </summary>

        <div className="pb-6 pr-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {answer}
          </p>
        </div>
      </details>
    </div>
  );
}

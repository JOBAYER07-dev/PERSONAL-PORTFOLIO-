// app/loading.jsx
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999]">
      <div className="font-[family-name:var(--font-syne)] font-bold text-4xl text-[#c8f04e] mb-6">
        J.
      </div>
      <div className="w-48 h-px bg-base-700 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-[#c8f04e] animate-[loading_1s_ease-in-out]" />
      </div>
      <p className="text-xs tracking-[0.3em] text-base-content/30 mt-4 uppercase">
        Initializing Experience
      </p>
    </div>
  );
}

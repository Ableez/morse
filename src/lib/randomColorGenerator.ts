export const randomColor = () => {
  const colors = [
    "bg-yellow-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-red-200",
    "bg-rose-200",
    "bg-indigo-200",
    "bg-orange-200",
    "bg-green-200",
    "bg-emerald-200",
    "bg-fuchsia-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-cyan-200",
    "bg-sky-200",
    "bg-amber-200",
    "bg-gray-200",
    "bg-slate-200",
  ];

  return colors[Math.round(Math.random() * colors.length)];
};

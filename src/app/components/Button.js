export default function Button({
  texto,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
    >
      {texto}
    </button>
  );
}
/* eslint-disable react/prop-types */
function Tag({ tag }) {
  const colors = [
    "bg-red-400",
    "bg-amber-400",
    "bg-lime-400",
    "bg-green-400",
    "bg-teal-400",
    "bg-purple-500",
  ];
  const randomNumber = Math.floor(Math.random() * colors.length);

  return (
    <li>
      <span
        className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${colors[randomNumber]} px-2.5 text-sm capitalize text-[#F4F5F6]`}
      >
        {tag}
      </span>
    </li>
  );
}

export default Tag;

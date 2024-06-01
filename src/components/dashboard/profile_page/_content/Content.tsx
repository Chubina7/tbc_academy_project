export default function Content() {
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-xl">HEADING</h1>
        <p>edit</p>
      </div>
      <div className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300 | flex flex-col md:flex-row justify-start items-center gap-3">
        <i>CONTENT</i>
      </div>
    </section>
  );
}

import { portfolio } from "../../data/portfolioData";

function CodeWindow() {
  const { personal } = portfolio;

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-800 bg-[#111827]/95 shadow-[0_20px_80px_rgba(37,99,235,0.18)] backdrop-blur-xl">

      {/* Top Bar */}

      <div className="flex items-center justify-between border-b border-gray-800 bg-[#0f172a] px-5 py-4">

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500"></div>

          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

          <div className="h-3 w-3 rounded-full bg-green-500"></div>

        </div>

        <p className="text-sm text-gray-400">
          developer.js
        </p>

        <div></div>

      </div>

      {/* Body */}

      <div className="grid grid-cols-[45px_1fr]">

        {/* Line Numbers */}

        <div className="select-none border-r border-gray-800 bg-[#0b1220] py-6 text-center text-sm leading-8 text-gray-600">

          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>

        </div>

        {/* Code */}

        <pre className="overflow-x-auto p-6 text-[15px] leading-8">

<span className="text-purple-400">const</span>{" "}
<span className="text-sky-400">developer</span>{" "}
=
{" {"}

{"\n"}

&nbsp;&nbsp;<span className="text-green-400">name</span>:
<span className="text-orange-300">
" {personal.name} "
</span>,

{"\n"}

&nbsp;&nbsp;<span className="text-green-400">role</span>:
<span className="text-orange-300">
" {personal.title} "
</span>,

{"\n"}

&nbsp;&nbsp;<span className="text-green-400">skills</span>: [

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="text-cyan-400">"React"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="text-cyan-400">"Node.js"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="text-cyan-400">"Express"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="text-cyan-400">"JavaScript"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="text-cyan-400">"Tailwind"</span>

{"\n"}

&nbsp;&nbsp;],

{"\n"}

&nbsp;&nbsp;<span className="text-green-400">status</span>:
<span className="text-orange-300">
"Open to Opportunities"
</span>

{"\n"}

{"};"}

        </pre>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800 bg-[#0f172a] px-5 py-4">

        <p className="font-mono text-green-400">

          &gt; Portfolio running...

        </p>

        <p className="mt-1 text-xs text-gray-500">

          React + Express + Tailwind

        </p>

      </div>

    </div>
  );
}

export default CodeWindow;
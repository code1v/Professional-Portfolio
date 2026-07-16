import { portfolio } from "../../data/portfolioData";

function Footer() {

const { personal } = portfolio;

return (

<footer className="border-t border-gray-800 bg-[#090909] py-8">

<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">

<p className="text-gray-500">

© 2026 {personal.name}. All Rights Reserved.

</p>

<div className="flex gap-6 mt-4 md:mt-0">

<a
href={personal.github}
target="_blank"
className="text-gray-400 hover:text-blue-500">

GitHub

</a>

<a
href={personal.linkedin}
target="_blank"
className="text-gray-400 hover:text-blue-500">

LinkedIn

</a>

</div>

</div>

</footer>

);

}

export default Footer;
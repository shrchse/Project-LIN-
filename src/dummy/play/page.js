"use client"

const Play = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the menu
    };

    return ( 
        <nav className="bg-white border-1 p-4 mb-1 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl bg-gradient-to-r from-blue-800 to-pink-400 text-transparent bg-clip-text font-bold pl-5">Digitaliz</a>
                <button
                    id="mobile-menu-button"
                    className="md:hidden text-purple-500 hover:bg-gray-300 px-1 py-2 rounded"
                    onClick={toggleMobileMenu}
                >
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div id="mobile-menu" class="md:flex md:translate-y-0 md:flex-row translate-y-20 flex flex-col md:space-x-4">
                    <input class="card pl-2 justify border-b-2 border-purple-500 hover:bg-gray-100 px-2 py-2 rounded" type="Search" placeholder="Search"/>
                    <a href="{{ url('/home') }}" class="text-purple-500 hover:bg-gray-300 px-1 py-2 rounded">Home</a>
                    <a href="{{ url('/blog') }}" class="text-purple-500 hover:bg-gray-300 px-1 py-2 rounded">Blog</a>
                    <a href="#" class="text-purple-500 hover:bg-gray-300 px-1 py-2 rounded">About</a>
                </div>
            </div>
        </nav>
    );
}

export default Play;

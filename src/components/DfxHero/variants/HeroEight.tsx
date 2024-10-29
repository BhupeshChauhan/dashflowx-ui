const HeroSeven = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
   <img alt="A person with glasses and a cityscape background at night with bokeh lights" className="absolute inset-0 w-full h-full object-cover z-0" height="1080" src="https://storage.googleapis.com/a1aa/image/kWZfkhnALy0EFqso0d2IiPf17Jq2SKoXFQiL2DUx3cVvR8kTA.jpg" width="1920"/>
   <div className="absolute inset-0 bg-black opacity-50 z-0">
   </div>
   <div className="relative z-10 text-center text-white px-4">
    <p className="text-sm uppercase tracking-widest mb-2">
     Hero Image
    </p>
    <h1 className="text-5xl font-bold mb-4">
     Creativity
    </h1>
    <p className="text-lg mb-6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros dolor pellentesque sed luctus dapibus lobortis orci.
    </p>
    <div className="flex justify-center space-x-4">
     <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full">
      Main Action
     </button>
     <button className="bg-gray-200 text-gray-900 font-semibold py-2 px-6 rounded-full">
      Learn More
     </button>
    </div>
   </div>
  </div>
  )
}

export default HeroSeven
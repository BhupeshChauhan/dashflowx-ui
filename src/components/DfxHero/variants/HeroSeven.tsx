const HeroSeven = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
   <div className="bg-white p-12 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
    <div className="lg:mr-12 max-w-md mb-8 lg:mb-0">
     <p className="text-sm text-yellow-600 font-bold">
      INLINE IMAGES
     </p>
     <h1 className="text-4xl font-bold text-gray-800 mt-2">
      Making your future brighter.
     </h1>
     <p className="text-gray-600 mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros dolor pellentesque sed luctus dapibus lobortis orci.
     </p>
     <button className="mt-6 bg-yellow-600 text-white px-6 py-2 rounded-full flex items-center">
      Learn More
      <i className="fas fa-arrow-right ml-2">
      </i>
     </button>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <img src="https://placehold.co/300x400" alt="Person holding a sparkler at night" className="rounded-lg w-full h-full object-cover" style={{height: "400px"}} />
     <div className="grid grid-rows-2 gap-4">
                    <img src="https://placehold.co/300x195" alt="Person smiling while holding shopping bags" className="rounded-lg w-full h-full object-cover" />
                    <img src="https://placehold.co/300x195" alt="Person sitting on a car" className="rounded-lg w-full h-full object-cover" />
     </div>
    </div>
   </div>
  </div>
  )
}

export default HeroSeven
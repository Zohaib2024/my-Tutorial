import Image from "next/image";


export default function Home() {
  return (
    <>
    {/* <Quiz /> */}
    
    <div className=" flex flex-col relative  justify-center items-center h-screen">
    <span className="border-4 absolute mb-64  border-red-600 bg-red-600 text-white  text-center">
    <h1 className=" ">
      Top 5 Browsers
    </h1>
    </span>
    
  
    <div className="flex flex-col list-none border-4 rounded-xl border-red-600 justify-center  h-64 w-52   ">
      <div className="ml-5"> 
      <li>Chrome</li>
      <li>edge</li>
      <li>Firefox</li>
      <li>safari</li>
      <li>duckduckgo</li>
      </div>
   
    </div>
 
    </div>
    </>
  );
}

import React from "react";
import { useRouter } from "next/router";
import data from '../../../data.json';


interface DescriptionProp {
  id: number;
  Title: string;
  location: string;
  JobType: string;
  JobSummary: string;
  Responsibilities: string[];
  Requirements: string[];
  tags: string[],
}


const Job = () => {
  const router = useRouter();
  const {id}= router.query;
  let newData:DescriptionProp[];
  newData = Object.assign(data.filter((item)=>{
    return item.id.toString() == id;
  }))
  newData.map((advert) => 
    advert.tags = [advert.Title, advert.location, advert.JobType, advert.JobSummary]
  )




  return (
    <>
      {newData.map((advert) => (
        <div className="container">
      <h2 className={"text-left"}>{advert.Title}</h2>
      <div className={"flex"}>
        <div className={"flex flex-1 w-1/4 bg-blue-500 text-black text-left p-4"} key={advert.id} >
          <div>
            <h5 className={"text-black"}>Job Detail</h5>
            <p className={"text-black"}>
              <br />
             {advert.location}
            </p>
            <hr className={"color-abb8c3"} />
            <ul></ul>
          </div>
        </div>
        <div className={"w-3/4 bg-black-500 text-balck text-left p-4"}>
          <h5 className={"text-black"}>Job Description</h5>
          
        </div>
      </div>
    </div>
      ))}

{/* <div className="flex ">
      {newData.map((advert) => (
        <div className={`flex rounded-lg flex-col sm:flex-row pl-3.5 pt-3 pb-3 border-2 bg-white "}`} key={advert.id}>
        
          <div className=" flex">
        
            <div className="flex flex-1 w-1/4 bg-blue-500 text-black text-left p-4 font-bold text-black pt-2 pb-2 text-base sm:text-2xl hover:text-blue cursor-pointer">{advert.Title}</div>
            <div className="flex flex-row list-disc gap-10 text-grey font-normal pt-2 pb-2 text-base sm:text-lg">
                <div>{advert.JobSummary}</div>
                <div>{advert.location}</div>
            </div>
          </div>
          <hr className="border-t-[3px] mr-10"/>
         
        </div>
      ))}
    </div> */}

      </>
  );
};


export default Job;
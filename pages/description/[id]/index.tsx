import React from "react";
import { useRouter } from "next/router";
import data from '../../../data.json';


interface DescriptionProp {
  id: number;
  Title: string;
  Location: string;
  JobType: string;
  Date: Date;
  JobSummary: string;
  Responsibilities: string[];
  Requirements: string[];
  tags: string[],
}


const Job = () => {
  const router = useRouter();
  const { id } = router.query;
  let newData: DescriptionProp[];
  newData = Object.assign(data.filter((item) => {
    return item.id.toString() == id;
  }))


  return (
    <>
      {newData.map((advert) => (
        <div className="container">
          <h2 className={"text-left"}>{advert.Title}</h2>
          <div className={"flex"}>
            <div className={"flex flex-1 w-1/4 bg-blue-500 text-black text-left p-4"} key={advert.id} >
              <div>
                <h5 className={"text-black"}>Job Detail</h5>
                {advert.Title}
                <div>
                  {advert.Location}
                </div>
                <div>{advert.Date}</div>
                <hr className={"color-abb8c3"} />
                <ul></ul>
              </div>
            </div>
            <div className={"w-3/4 bg-black-500 text-balck text-left p-4"}>
              <h5 className={"text-black"}>Job Description</h5>
                <div className="">{advert.Title}</div>
                <div>{advert.JobType}</div> 
                <div>{advert.JobSummary}</div>
                <div className="">{advert.Responsibilities}</div> 
                <div className="">{advert.Requirements}</div> 
            </div>
          </div>
        </div>
      ))}


    </>
  );
};


export default Job;
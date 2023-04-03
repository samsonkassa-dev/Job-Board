import type { NextPage } from 'next'
import data from '../data.json';
import { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

interface JobProp {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
  tags: string[],
}

const Home: NextPage = () => {

  const [isSearch, setIsSearch] = useState(false)
  const [filterList, setFilterList] = useState<string[]>([])
  const router = useRouter();

  const handleTagClick = () => {
    console.log("hello");
    // Do something with the clicked tag, such as filtering the data based on the tag.
  }

  let newData: JobProp[];
  newData = Object.assign(data)
  newData.map((advert) =>
    advert.tags = [...advert.languages, ...advert.tools]
  )

  return (
    <>
      <div className="flex flex-col gap-8 bg-rgb(92, 165, 165,10) max-w-5xl mx-14 sm:mx-auto mt-12 shadow-[rgba(92, 165, 165,100%)] drop-shadow-lg">
        {newData.map((advert) => (
          <div className={`flex rounded-lg flex-col sm:flex-row pl-3.5 pt-3 pb-3 border-2 bg-white ${advert.featured && "border-l-8 border-l-[#5CA5A5]"}`} key={advert.id}>
            <div className="absolute -mt-11 sm:relative  flex h-12 w-12 rounded-full sm:h-24 sm:w-24 ml-2 sm:self-center place-self-start sm:mx-6">
              <img src={advert.logo} alt="company logo" className="w-fit h-fit" />
            </div>
            <div className="pt-2 pb-2 sm: flex-1">
              <div className="flex flex-row gap-3 pt-2 pb-1">
                <div className="text-blue font-bold mr-5 text-sm md:text-lg">{advert.company}</div>
                <div className={`bg-blue text-white text-sm rounded-2xl w-12 text-center font-semibold pt-1 ${!advert.new && "hidden"}`}>{advert.new && "NEW!"}</div>
                <div className={`bg-black text-white text-sm rounded-2xl font-semibold w-20 text-center pt-1 ${!advert.featured && "hidden"}`}>{advert.featured && "FEATURED"}</div>
              </div>
              <div className="font-bold text-black pt-2 pb-2 text-base sm:text-2xl hover:text-blue cursor-pointer">{advert.position}</div>
              <div className="flex flex-row list-disc gap-10 text-grey font-normal pt-2 pb-2 text-base sm:text-lg">
                <div>{advert.postedAt}</div>
                <div>{advert.contract}</div>
                <div>{advert.location}</div>
              </div>
            </div>
            <hr className="border-t-[3px] mr-10" />
            <div className="flex flex-wrap gap-4 mr-10 sm:content-center sm:justify-end mt-4">
              <Link href={`description/${advert.id}`}>
                <a>Apply</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home

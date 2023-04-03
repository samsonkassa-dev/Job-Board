import type { NextPage } from 'next'
import data from '../data.json';
import {useState} from 'react';
import {useRouter} from "next/router";

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

  const handleTagClick= ()=> {
    console.log("hello");
    // Do something with the clicked tag, such as filtering the data based on the tag.
  }

  let newData:JobProp[];
  newData = Object.assign(data)
  newData.map((advert) => 
    advert.tags = [...advert.languages, ...advert.tools]
  )
  // const [filterData, setFilterData] = useState<JobProp[]>(newData)
  // let newFilterData: JobProp[] = Object.assign(newData)
  
  // const addFilter = (e: React.MouseEvent) => {
  //   let newList: string[] = [];
  //   const target = e.target as HTMLElement;
  //   if(filterList.indexOf(target.innerText)=== -1) {
  //     newList.push(...filterList, target.innerText)
  //   } else {
  //     newList.push(...filterList);
  //   }
  //   setFilterList(newList);
  //   setIsSearch(true);
  //   if(newList.length===0) {
  //       setIsSearch(false);
  //     } 
  //   for(let i=0; i<newList.length; i++) {
  //     newFilterData = newFilterData.filter(({tags}) => tags.includes(newList[i]))
  //   }

  //   setFilterData(newFilterData);
  //   }

  // const removeFilter = (e:React.MouseEvent) => {
  //   const target = e.target as HTMLElement;
  //   const parent = target.offsetParent as HTMLElement
  //   let newList = filterList.filter(tag => tag !== parent.innerText)
  //   setFilterList(newList);
  //   if(newList.length===0) {
  //     setIsSearch(false);
  //   } else {
  //     for(let i=0; i<length; i++){
  //       newFilterData = newFilterData.filter(({tags}) => tags.includes(newList[i]));
  //     }
  //   }
  //   setFilterData(newFilterData);
  // }

  // const removeAllFilter=() => {
  //   setFilterList([]);
  //   setIsSearch(false);
  //   setFilterData(newData)
  // }

  return (
    <>
      {/* <div className={`flex bg-red max-w-5xl mx-14 sm:mx-auto min-h-[72px] box-border pl-12 -mt-5 py-4 rounded-xl ${!isSearch && "hidden"}`}>
        <div className="flex flex-1  gap-5  flex-wrap">
          {filterList.map((tag) => (
            <span key={tag} className="flex spanTag self-center items-center gap-3">
              {tag}
              <div className="bg-blue hover:bg-black flex items-center justify-center w-8 h-8" onClick={(e) => removeFilter(e)}>
                <img src="/images/icon-remove.svg" alt="" className="w-fit h-fit" />
              </div>
            </span>
          ))}
          </div>
          <span className="flex justify-end self-center mr-8 mt-2 font-semibold text-blue cursor-pointer" onClick={removeAllFilter}>Clear</span>
      </div> */}
    <div className="flex flex-col gap-8 bg-rgb(92, 165, 165,10) max-w-5xl mx-14 sm:mx-auto mt-12 shadow-[rgba(92, 165, 165,100%)] drop-shadow-lg">
      {newData.map((advert) => (
        <div className={`flex rounded-lg flex-col sm:flex-row pl-3.5 pt-3 pb-3 border-2 bg-white ${advert.featured && "border-l-8 border-l-[#5CA5A5]"}`} key={advert.id}>
          <div className="absolute -mt-11 sm:relative  flex h-12 w-12 rounded-full sm:h-24 sm:w-24 ml-2 sm:self-center place-self-start sm:mx-6">
            <img src={advert.logo} alt="company logo" className="w-fit h-fit"/>
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
          <hr className="border-t-[3px] mr-10"/>
          <div className="flex flex-wrap gap-4 mr-10 sm:content-center sm:justify-end mt-4">
            <h5 onClick={()=>{
              router.push('/description/id=1');
            }}>appy</h5>
</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Home

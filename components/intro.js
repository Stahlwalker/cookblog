import { CMS_NAME, CMS_URL } from '../lib/constants'
import ContentfulImage from './contentful-image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Stahlwalker Cookbook
      </h1>
      <div>
      {/* <ContentfulImage src="/images/starwars_egg_cropped.jpg" layout="fill" alt="" /> */}
      <img src="/images/starwars_egg_cropped.jpg" layout="fill" alt=""></img>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        May the FOOD be with you {' '} 
        <i className="fa-solid fa-jedi"></i>
      </h4>
      </div>
      
    </section>
  )
}

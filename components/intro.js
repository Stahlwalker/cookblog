import { CMS_NAME, CMS_URL } from '../lib/constants'
import ContentfulImage from './contentful-image'
import Search from "../components/Search";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-6">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-3">
        Stahlwalker Cookbook
      </h1>
      <div>
        <div className="iconImage">
      {/* <ContentfulImage src="/images/starwars_egg_cropped.jpg" layout="fill" alt="" /> */}
      <img src="/images/starwars_egg_cropped.jpg" layout="fill" alt="vader with egg for helmet"></img>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        May the FOOD be with you {' '} 
        <i aria-hidden className="fas fa-jedi"></i>
      </h4>
      </div>
      <Search>
                {/* <PostList posts={posts} /> */}
              </Search> 
      </div>
      
    </section>
  )
}

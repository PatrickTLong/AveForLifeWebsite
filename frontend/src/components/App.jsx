import Header from "./Header";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Footer from "./Footer";
import MainPic from "./imgs/Main1.jpeg";
import Mlong2 from "./imgs/mlongmarchpic.jpeg";
import Mlong1 from "./imgs/mlongpic.jpeg";
export default function App() {
  const checksvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-12">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
  const partysvg = <svg xmlns="http://www.w3.org/2000/svg" id="confetti" viewBox="0 0 48 48">
  <path d="M16.115,10.884L3.157,42.261c-.676,1.636.946,3.258,2.582,2.582l31.377-12.958L16.115,10.884Z" style="fill:#ff3b65"></path>
  <path d="M37.12,31.88l-31.38,12.96c-1.39.58-2.77-.51-2.74-1.85.48,1,1.77,1.53,2.87.84l26.59-16.61,4.66,4.66Z" style="fill:#d82b50"></path>
  <path d="M15.27,40.9l-6.39,2.64c-1.32-2.46-2.33-5.11-2.99-7.89l4.2-10.18c.42,5.66,2.26,10.92,5.18,15.43ZM20.05,14.81l-3.93-3.93-.66,1.6c-.3,1.79-.46,3.64-.46,5.52,0,7.6,2.57,14.6,6.87,20.18l6.85-2.83c-5.04-5.47-8.24-12.63-8.67-20.54Z" style="fill:#ffc343"></path>
  <path d="M14.002,38.747c.399.733.816,1.455,1.268,2.153l-6.39,2.64c-.213-.398-.405-.808-.602-1.216l5.725-3.578ZM19.786,35.132c.64,1.055,1.334,2.074,2.084,3.048l6.85-2.83c-1.118-1.214-2.14-2.515-3.067-3.884l-5.867,3.667Z" style="fill:#ffa221"></path>
  <ellipse cx="26.916" cy="21.084" rx="4" ry="15" style="fill:#cfe0f3" transform="rotate(-45 26.916 21.084)"></ellipse>
  <path d="M15.603 9.77c-.322.322-.51.728-.595 1.196L2.237 41.875c-.473 1.14-.229 2.385.637 3.25.573.574 1.314.874 2.08.874.39 0 .786-.078 1.169-.237l30.887-12.762c.479-.082.892-.276 1.22-.605 2.429-2.43-2.33-9.4-7.778-14.849s-12.417-10.208-14.849-7.778ZM19.902 20.799c1.213 5.206 3.686 10.062 7.153 14.152l-4.835 1.998c-4.062-5.533-6.22-12.054-6.22-18.948 0-.911.042-1.828.12-2.744.887 1.727 2.212 3.64 3.782 5.543ZM15.682 39.65c-2.597-4.257-4.182-9.094-4.574-14.005l2.916-7.057c.116 6.938 2.289 13.515 6.309 19.141l-4.65 1.921ZM9.36 42.262c-1.038-2.076-1.85-4.27-2.417-6.537l2.642-6.396c.743 3.911 2.183 7.674 4.231 11.092l-4.456 1.841ZM5.358 43.915c-.568.236-.962-.096-1.07-.203-.107-.107-.439-.501-.203-1.071l1.635-3.957c.49 1.494 1.091 2.942 1.79 4.342l-2.152.889ZM28.996 34.149c-2.568-2.906-4.581-6.252-5.937-9.862.108.11.214.224.322.332 3.273 3.273 7.091 6.29 10.148 7.657l-4.533 1.873ZM36.816 30.983c-.637.633-5.489-1.247-12.021-7.778-6.531-6.532-8.413-11.387-7.778-12.021.076-.076.213-.116.406-.116 1.417 0 5.867 2.146 11.615 7.894 6.531 6.531 8.413 11.387 7.778 12.021ZM27.721 10.499c-.169 0-.341-.043-.499-.134-.478-.276-.642-.888-.366-1.366.756-1.309.879-2.052 1.022-2.913.153-.92.327-1.962 1.263-3.585.276-.479.885-.644 1.366-.366.478.276.642.888.366 1.366-.756 1.309-.879 2.052-1.022 2.913-.153.92-.327 1.962-1.263 3.585-.186.321-.521.5-.867.5ZM39.072 22.067c-.442 0-.846-.295-.965-.742-.143-.534.174-1.082.707-1.225 3.446-.923 5.407-3.169 5.426-3.192.36-.417.991-.467 1.409-.11.419.358.471.986.114 1.406-.094.111-2.357 2.736-6.432 3.827-.087.023-.174.035-.259.035Z" style="fill:#08105e"></path>
  <circle cx="44" cy="10" r="1" style="fill:#08105e"></circle>
  <circle cx="35" cy="12" r="1" style="fill:#08105e"></circle>
  <circle cx="22" cy="5" r="1" style="fill:#08105e"></circle>
  <circle cx="44" cy="26" r="1" style="fill:#08105e"></circle>
  <circle cx="38" cy="4" r="1" style="fill:#08105e"></circle>
</svg>
  return (
    <>
      <Header />
      <Main1 
        img={MainPic} 
        add='pt-48 pb-24'
        title="We are the Pro-Life Generation." 
        summary="As the Ave for Life Club, we stand against the tragedy of abortion and its impact on men, women, and children worldwide. Our mission is to empower pro-life students at Ave Maria University, uniting them in prayer, education, and community-building events to create a culture that upholds the dignity of life." 
        svg={checksvg}
      />
      <Main2 />
      <Main1 
        img={Mlong1} 
        add='pt-24 pb-24'
        title="Meet Our President!" 
        summary="Michael D. Long graduated as the salutatorian of Donahue Academy High School in Ave Maria. He is now a sophomore at Ave Maria University. As our President, he is dedicated to championing the dignity and protection of unborn babies while fostering a culture of love and support for mothers in difficult circumstances. He works tirelessly to promote life-affirming solutions, ensuring that women receive the care, compassion, and resources they need to choose life with confidence and hope."
       
      />
      <Footer />
    </>
  );
}

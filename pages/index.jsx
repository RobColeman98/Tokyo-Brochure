import Head from 'next/head'



export default function Home() {
  return (
   
    <div>
      <Head>
      <title>Tokyo Brochure</title>
      </Head>
     
      <h1>Welcome to Tokyo!</h1>
      <h2>Tokyo is Japan's busy capital and it mixes the modern and the traditional, from neon-lit skyscrapers to historic temples. The city's many museums offer exhibts ranging from classical art to a reconstructed kabuki theater!</h2>
      <h2>Tokyo is also home to the most glorious attractions, ranging from the major shopping & electronic district of Akihabara, to more nature filled environments such as the Shinjuku Gyoen National Garden.</h2>
      <h2>Whether you are here for buisness or personal reasons, we guarantee you will enjoy your stay here in Tokyo! </h2>
      
      <img id="tokyo" src="/tokyo-nightlife.jpg" height={400} width={400}></img>
      <img id="akihabara" src="/akihabara.jpg" height={400} width={400}></img>
      <img id="Garden" src="/Garden.jpg" height={400} width={400}></img>
    </div>
    
  )
}

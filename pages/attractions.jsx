import Head from "next/head";

export default function Attractions() {
  return (
    <div>
      <h1>Akihabara</h1>

      <h3>
        Located within the Chiyoda Ward of Tokyo is Akihabara, a major shopping
        and electronics district. While plenty local residents flock here, it is
        a prime spot for travelers who are looking to experience a different
        side of Japanese culture.
      </h3>
      <h3>
        If you're fascinated by the tech-savvy side of Japan, then Akihabara is
        the place to see the latest and best in technology. As a center of
        Japanese otaku and anime culture there are dozens of stores specilaizing
        in anime, manga and other collectables.
      </h3>
      <img id="akihabara2" src="/akihabara2.jpg" height={500} width={500}></img>
      {/* Akihabara Section */}

      <h1 id="tokyo-tower">Tokyo Tower</h1>
      <h2>
        The Tokyo Tower is one of the most easily recognizable landmarks in the
        city. Built in 1958,Tokyo Tower is primarily used for communication and
        broadcasting, however you visit one of the two observation decks to get
        a spectacular view of the city.{" "}
      </h2>
      <img
        id="tokyo_tower"
        src="/tokyo_tower.jpg"
        height={500}
        width={500}
      ></img>

      <h2>When many people think of Japan, they they about the skyscrapers and shopping areas. That's why it's such a delight to come across the Shinjuku Gyoen National Garden. There are three distinc landscape availabe in Shinjuku Gyoen National Garden: the English Garden landscape, French formal landscape, and traditional Japanese landscape. You can have a picnic, stroll the walkways, or stop to see the many cherry trees that fill the gardens. </h2>
      <img id="Garden2" src="/Garden.jpg" height={500} width={500}alt=""/>
    </div>
  );
}

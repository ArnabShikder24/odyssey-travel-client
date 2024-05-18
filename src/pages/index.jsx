import Image from "next/image";
import { useEffect } from "react";
import hill1 from "../../public/image/hill1.png"
import hill2 from "../../public/image/hill2.png"
import hill3 from "../../public/image/hill3.png"
import hill4 from "../../public/image/hill4.png"
import hill5 from "../../public/image/hill5.png"
import tree from "../../public/image/tree.png"
import plant from "../../public/image/plant.png"
import leaf from "../../public/image/leaf.png"


export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const maxScroll = 500;
      const clampedValue = Math.min(value, maxScroll);

      document.getElementById('text').style.marginTop = `${clampedValue * 2.5}px`;
      document.getElementById('leaf').style.top = `${clampedValue * -1.5}px`;
      document.getElementById('leaf').style.left = `${clampedValue * 1.5}px`;
      document.getElementById('hill5').style.left = `${clampedValue * 1.5}px`;
      document.getElementById('hill4').style.left = `${clampedValue * -1.5}px`;
      document.getElementById('hill1').style.top = `${clampedValue * 1}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-container">
      <header className="header">
        <h2 className="logo">Odyssey</h2>
        <nav className="navigation">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </nav>
      </header>

      <section className="parallax">
        <Image src={hill1} id="hill1" alt="Hill 1" />
        <Image src={hill2} id="hill2" alt="Hill 2" />
        <Image src={hill3} id="hill3" alt="Hill 3" />
        <Image src={hill4} id="hill4" alt="Hill 4" />
        <Image src={hill5} id="hill5" alt="Hill 5" />
        <Image src={tree} id="tree" alt="Tree" />
        <h2 id="text">Odyssey Travels</h2>
        <Image src={leaf} id="leaf" alt="Leaf" />
        <Image src={plant} id="plant" alt="Plant" />
      </section>

      <section className="sec">
        <h2>Select Your Perfect Tour</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit libero nisi numquam possimus, exercitationem voluptate, ut quas tenetur est explicabo magnam, error ratione praesentium tempora nulla minus! Laborum neque aliquid suscipit eligendi magni! Laborum excepturi ratione modi quae! Doloribus soluta ducimus velit blanditiis ipsa non veniam eligendi fugiat expedita facere. Nemo labore illo dolorum minus veritatis. Voluptas velit asperiores quaerat, sit consectetur doloribus aperiam quia nam veniam, sed explicabo, in laudantium voluptatem rerum repudiandae dolorem temporibus vel est numquam eius. Doloremque rerum recusandae ut optio? Obcaecati ex officiis dolorem quos quo ducimus expedita id, numquam, ab, qui sequi voluptates excepturi nam neque quisquam! Repudiandae necessitatibus unde quisquam nisi, nesciunt, ex quam quidem sapiente quia repellat deserunt aliquid veniam consequatur. Impedit voluptate fuga molestias distinctio recusandae alias reprehenderit amet itaque. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit libero nisi numquam possimus, exercitationem voluptate, ut quas tenetur est explicabo magnam, error ratione praesentium tempora nulla minus! Laborum neque aliquid suscipit eligendi magni! Laborum excepturi ratione modi quae! Doloribus soluta ducimus velit blanditiis ipsa non veniam eligendi fugiat expedita facere. Nemo labore illo dolorum minus veritatis. Voluptas velit asperiores quaerat, sit consectetur doloribus aperiam quia nam veniam, sed explicabo, in laudantium voluptatem rerum repudiandae dolorem temporibus vel est numquam eius. Doloremque rerum recusandae ut optio? Obcaecati ex officiis dolorem quos quo ducimus expedita id, numquam, ab, qui sequi voluptates excepturi nam neque quisquam! Repudiandae necessitatibus unde quisquam nisi, nesciunt, ex quam quidem sapiente quia repellat deserunt aliquid veniam consequatur. Impedit voluptate fuga molestias distinctio recusandae alias reprehenderit amet itaque. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit libero nisi numquam possimus, exercitationem voluptate, ut quas tenetur est explicabo magnam, error ratione praesentium tempora nulla minus! Laborum neque aliquid suscipit eligendi magni! Laborum excepturi ratione modi quae! Doloribus soluta ducimus velit blanditiis ipsa non veniam eligendi fugiat expedita facere. Nemo labore illo dolorum minus veritatis. Voluptas velit asperiores quaerat, sit consectetur doloribus aperiam quia nam veniam, sed explicabo, in laudantium voluptatem rerum repudiandae dolorem temporibus vel est numquam eius. Doloremque rerum recusandae ut optio? Obcaecati ex officiis dolorem quos quo ducimus expedita id, numquam, ab, qui sequi voluptates excepturi nam neque quisquam! Repudiandae necessitatibus unde quisquam nisi, nesciunt, ex quam quidem sapiente quia repellat deserunt aliquid veniam consequatur. Impedit voluptate fuga molestias distinctio recusandae alias reprehenderit amet itaque. <br /> <br />
        </p>
      </section>

      <section className="sec2">
        <h2>Client Satisfaction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit libero nisi numquam possimus, exercitationem voluptate, ut quas tenetur est explicabo magnam, error ratione praesentium tempora nulla minus! Laborum neque aliquid suscipit eligendi magni! Laborum excepturi ratione modi quae! Doloribus soluta ducimus velit blanditiis ipsa non veniam eligendi fugiat expedita facere. Nemo labore illo dolorum minus veritatis. Voluptas velit asperiores quaerat, sit consectetur doloribus aperiam quia nam veniam, sed explicabo, in laudantium voluptatem rerum repudiandae dolorem temporibus vel est numquam eius. Doloremque rerum recusandae ut optio? Obcaecati ex officiis dolorem quos quo ducimus expedita id, numquam, ab, qui sequi voluptates excepturi nam neque quisquam! Repudiandae necessitatibus unde quisquam nisi, nesciunt, ex quam quidem sapiente quia repellat deserunt aliquid veniam consequatur. Impedit voluptate fuga molestias distinctio recusandae alias reprehenderit amet itaque. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit libero nisi numquam possimus, exercitationem voluptate, ut quas tenetur est explicabo magnam, error ratione praesentium tempora nulla minus! Laborum neque aliquid suscipit eligendi magni! Laborum excepturi ratione modi quae! Doloribus soluta ducimus velit blanditiis ipsa non veniam eligendi fugiat expedita facere. Nemo labore illo dolorum minus veritatis. Voluptas velit asperiores quaerat, sit consectetur doloribus aperiam quia nam veniam, sed explicabo, in laudantium voluptatem rerum repudiandae dolorem temporibus vel est numquam eius. Doloremque rerum recusandae ut optio? Obcaecati ex officiis dolorem quos quo ducimus expedita id, numquam, ab, qui sequi voluptates excepturi nam neque quisquam! Repudiandae necessitatibus unde quisquam nisi, nesciunt, ex quam quidem sapiente quia repellat deserunt aliquid veniam consequatur. Impedit voluptate fuga molestias distinctio recusandae alias reprehenderit amet itaque. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit libero nisi numquam possimus, exercitationem voluptate, ut quas tenetur est explicabo magnam, error ratione praesentium tempora nulla minus! Laborum neque aliquid suscipit eligendi magni! Laborum excepturi ratione modi quae! Doloribus soluta ducimus velit blanditiis ipsa non veniam eligendi fugiat expedita facere. Nemo labore illo dolorum minus veritatis. Voluptas velit asperiores quaerat, sit consectetur doloribus aperiam quia nam veniam, sed explicabo, in laudantium voluptatem rerum repudiandae dolorem temporibus vel est numquam eius. Doloremque rerum recusandae ut optio? Obcaecati ex officiis dolorem quos quo ducimus expedita id, numquam, ab, qui sequi voluptates excepturi nam neque quisquam! Repudiandae necessitatibus unde quisquam nisi, nesciunt, ex quam quidem sapiente quia repellat deserunt aliquid veniam consequatur. Impedit voluptate fuga molestias distinctio recusandae alias reprehenderit amet itaque. <br /> <br />
        </p>
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};

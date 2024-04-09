import Image from "next/image";
import Link from "next/link";
import React from "react";

// {
//   id: 30,
//   name: 'Brazilian Caipirinha',
//   ingredients: [
//     'Cachaça (Brazilian sugarcane spirit)',
//     'Lime, cut into wedges',
//     'Granulated sugar',
//     'Ice cubes'
//   ],
//   instructions: [
//     'In a glass, muddle lime wedges with granulated sugar to release the juice.',
//     'Fill the glass with ice cubes.',
//     'Pour cachaça over the ice and stir well.',
//     'Sip and enjoy the refreshing taste of the Brazilian Caipirinha!',
//     'Adjust sugar and lime to suit your taste preferences.'
//   ],
//   prepTimeMinutes: 5,
//   cookTimeMinutes: 0,
//   servings: 1,
//   difficulty: 'Easy',
//   cuisine: 'Brazilian',
//   caloriesPerServing: 150,
//   tags: [ 'Caipirinha', 'Brazilian', 'Cocktail' ],
//   userId: 64,
//   image: 'https://cdn.dummyjson.com/recipe-images/30.webp',
//   rating: 4.4,
//   reviewCount: 4,
//   mealType: [ 'Beverage' ]
// }

const BlogItem = ({ id, title, description, imgSrc, date }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="font-bold text-xl sm:text-3xl">{title}</h1>
      <p>{description}</p>
      <div className="w-full flex justify-end">
        <Link href={`/blog/${id}`}>Read more...</Link>
      </div>
      <Image
        className="w-full rounded-md"
        src={imgSrc}
        alt={title}
        width={760}
        height={520}
      />
      <i className="w-full text-right">{date}</i>
    </div>
  );
};

export default BlogItem;

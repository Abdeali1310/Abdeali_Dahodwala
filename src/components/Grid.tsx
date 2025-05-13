import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Separator } from "./ui/separator";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full text:black dark:text-white py-20 mb-12">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <Separator className="bg-gray-600" />
    </section>
  );
};

export default Grid;

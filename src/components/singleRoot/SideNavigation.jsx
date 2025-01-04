import { HiOutlineXMark } from "react-icons/hi2";

export default function SideNavigation({ onClose }) {
  return (
    <nav className={``}>
      <div className=" flex gap-1  ">
        <div className="h-screen overflow-auto border-2 border-gray-600 bg-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut numquam,
          eius, corporis mollitia earum animi nihil corrupti voluptatem quod
          veritatis odio rem, totam possimus architecto sequi voluptas
          reiciendis? Esse, tempora. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ut numquam, eius, corporis mollitia earum animi
          nihil corrupti voluptatem quod veritatis odio rem, totam possimus
          architecto sequi voluptas reiciendis? Esse, tempora. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Ut numquam, eius, corporis
          mollitia earum animi nihil corrupti voluptatem quod veritatis odio
          rem, totam possimus architecto sequi voluptas reiciendis? Esse,
          tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          numquam, eius, corporis mollitia earum animi nihil corrupti voluptatem
          quod veritatis odio rem, totam possimus architecto sequi voluptas
          reiciendis? Esse, tempora. Esse, tempora. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ut numquam, eius, corporis mollitia
          earum animi nihil corrupti voluptatem quod veritatis odio rem, totam
          possimus architecto sequi voluptas reiciendis? Esse, tempora. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ut numquam, eius,
          corporis mollitia earum animi nihil corrupti voluptatem quod veritatis
          odio rem, totam possimus architecto sequi voluptas reiciendis? Esse,
          tempora. Esse, tempora. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ut numquam, eius, corporis mollitia earum animi
          nihil corrupti voluptatem quod veritatis odio rem, totam possimus
          architecto sequi voluptas reiciendis? Esse, tempora. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Ut numquam, eius, corporis
          mollitia earum animi nihil corrupti voluptatem quod veritatis odio
          rem, totam possimus architecto sequi voluptas reiciendis? Esse,
          tempora. Esse, tempora. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ut numquam, eius, corporis mollitia earum animi
          nihil corrupti voluptatem quod veritatis odio rem, totam possimus
          architecto sequi voluptas reiciendis? Esse, tempora. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Ut numquam, eius, corporis
          mollitia earum animi nihil corrupti voluptatem quod veritatis odio
          rem, totam possimus architecto sequi voluptas reiciendis? Esse,
          tempora. Esse, tempora. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ut numquam, eius, corporis mollitia earum animi
          nihil corrupti voluptatem quod veritatis odio rem, totam possimus
          architecto sequi voluptas reiciendis? Esse, tempora. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Ut numquam, eius, corporis
          mollitia earum animi nihil corrupti voluptatem quod veritatis odio
          rem, totam possimus architecto sequi voluptas reiciendis? Esse,
          tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          numquam, eius, corporis mollitia earum animi nihil corrupti voluptatem
          quod veritatis odio rem, totam possimus architecto sequi voluptas
          reiciendis? Esse, tempora.
        </div>
        <div className="p-1">
          <button
            onClick={() => onClose(false)}
            className=" hover:border-gray-600 p-2 text-white hover:text-red-400 mt-1 border rounded-sm"
          >
            <HiOutlineXMark className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}

import Image from "next/image";
import Post from "./components/Post";
import rokr0kIcon from "./rokr0k_icon.svg";
import data from "./data.json";

export default function Home() {
    return (
        <div className="flex flex-col p-6">
            <div>
                <Image src={rokr0kIcon} alt="Rokr0k" width={96} />
            </div>
            <div className="flex flex-row p-2 gap-4">
                <div className="flex flex-col basis-1/2">
                    {data.posts.map((record, index) => (
                        <Post key={index} data={record} />
                    ))}
                </div>
                <div className="flex flex-col basis-1/2">
                    {data.projects.map((post, index) => (
                        <Post key={index} data={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}

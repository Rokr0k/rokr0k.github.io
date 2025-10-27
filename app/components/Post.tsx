export type PostData = {
    name: string;
    urls?: {
        name: string;
        url: string;
    }[];
    desc: string[];
};

export default async function Post({
    data,
}: {
    data: Readonly<PostData>;
}) {
    return (
        <div className="flex flex-col m-2 p-3 border-2 gap-2">
            <h2 className="text-3xl">{data.name}</h2>
            {data.urls != null ? (
                <div className="flex flex-row gap-4 text-l">
                    {data.urls.map((url, index) => (
                        <a key={index} href={url.url} target="_blank">{url.name}</a>
                    ))}
                </div>
            ) : <></>}
            <div className="flex flex-col gap-2">
                {data.desc.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
    );
}

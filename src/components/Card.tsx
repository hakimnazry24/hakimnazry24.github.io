export default function Card({
  imageLink,
  projectTitle,
  projectLink,
  description,
}: {
  imageLink: string;
  projectTitle: string;
  projectLink: string;
  description: string;
}) {
  return (
    <div className="rounded-md shadow-md max-w-72 flex flex-col h-full">
      <div className="flex justify-center">
        <img src={imageLink} alt="Project image" className="max-h-80" />
      </div>

      <div className="m-3 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold leading-tight">{projectTitle}</h2>
        <p className="mt-2 flex-grow">{description}</p>

        <div className="flex justify-end mt-auto">
          <a href={projectLink} className="hover:underline font-semibold">
            More
          </a>
        </div>
      </div>
    </div>
  );
}

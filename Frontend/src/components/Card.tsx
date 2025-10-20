
import { ShareIcon } from "../icons/Shareicon";
import { Deletecard } from "../icons/deletecard";
import { useAppDispatch } from "../Store/hooks";
import { deleteContent } from "../Store/slices/contentSlice";

interface Cardprops {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "documents" | "others";
  id?: string;
  onDelete?: () => void;
}

export function Card({ title, link, type, id, onDelete }: Cardprops) {
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    if (!id) return;

    if (window.confirm("Are you sure you want to delete this content?")) {
      try {
        await dispatch(deleteContent(id)).unwrap();
        alert("Content deleted successfully!");
        if (onDelete) onDelete(); // optional callback
      } catch (error) {
        console.error("Error deleting content:", error);
        alert("Failed to delete content. Please try again.");
      }
    }
  };

  return (
    <div>
      <div
        className="p-4 bg-white rounded-md border 
        border-gray-200 hover:border-2
        hover:border-purple-300
        w-64 h-80 overflow-hidden flex flex-col"
      >
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pt-1 pr-3">
              <ShareIcon />
            </div>
            <p className="truncate pr-2">{title}</p>
          </div>

          <div className="flex items-center">
            <div className="pr-2">
             
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title="Open link"
                className="p-2 rounded-md hover:text-purple-600 focus:outline-none focus:ring-0 active:outline-none"
              >
                <ShareIcon />
              </a>
            </div>

            <div
              className="hover:text-red-500 cursor-pointer"
              onClick={handleDelete}
            >
              <Deletecard />
            </div>
          </div>
        </div>

        <div className="pt-3 flex-1">
          {type === "youtube" && link && (
            <iframe
              className="w-full h-32"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}

          {type === "twitter" && link && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}

          {type === "documents" && link && (
            <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Document
              </a>
            </div>
          )}

          {type === "others" && link && (
            <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Open Link
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

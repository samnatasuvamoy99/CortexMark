import { useState, useRef } from "react";
import { CrossIcon } from "../Icon/Delete";
import { Button } from "./Button";
import { Submit } from "../Icon/Submit";
import { Input } from "./Input";
import { Logo } from "../Icon/Logo";
import axios from "axios";
import { BACKEND_URL } from "../Config";

const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
  Documents: "documents",
  Others: "others",
} as const;
type ContentType = typeof ContentType[keyof typeof ContentType];

interface CreateContentProps {
  onClose: () => void; 
}

export function CreateContent({ onClose }: CreateContentProps) {
  const [loading, setLoading] = useState(false);

  const TitleRef = useRef<HTMLInputElement>(null);
  const LinkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent() {
    const title = TitleRef.current?.value;
    const link = LinkRef.current?.value;

    if (!title || !link) {
      alert("Please enter both title and link!");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${BACKEND_URL}/api/v1/content/addcontent`,
        {
          type,
          title,
          link,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("Your content was added successfully!");
      onClose(); 
    } catch (err: any) {
      console.error("content add error:", err);
      alert(err.response?.data?.message || "Failed to add content. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="w-screen h-screen bg-gray-200 fixed top-0 left-0 flex justify-center items-center"
    >
      <div className="bg-white p-10 border-2 shadow-xl rounded-lg relative w-[400px]">
        {/* Close button */}
        <div className="absolute top-3 right-3 cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>

        {/* Header */}
        <div className="flex gap-2 text-xl text-purple-500 justify-center mb-6">
          <Logo />
          <b>Second Brain</b>
        </div>

      
        <Input reference={TitleRef} placeholder="Title" type="text" />
        <Input reference={LinkRef} placeholder="Link" type="text" />

   
        <b className="block text-purple-600 mt-4 mb-2">Select your type:</b>

        <div className="flex flex-wrap gap-2">
          {Object.values(ContentType).map((ct) => (
            <Button
              key={ct}
              text={ct}
              variant={type === ct ? "primary" : "secondary"}
              styleType={type === ct ? "primarystyle" : "secondarystyle"}
              onClick={() => setType(ct)}
            />
          ))}
        </div>

     
        <div className="flex justify-center mt-6">
          <Button
            onClick={addContent}
            variant="primary"
            text={loading ? "Saving..." : "Submit"}
            styleType="primarystyle"
            endIcon={<Submit />}
            fullwidth={true}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}    
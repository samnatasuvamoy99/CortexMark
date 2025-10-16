

import { useState } from "react";
import { CreateContent } from "../Components/BookmarkCard";
import { Button } from "../Components/Button";

export function Popup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 bg-white w-[300px] rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-3 text-blue-700">Bookmark Brain</h2>

      <Button
        text="Add New Content"
        variant="primary"
        styleType="primarystyle"
        fullwidth={true}
        onClick={() => setOpen(true)}
      />

      {/* Render card component conditionally */}
      {open && <CreateContent onClose={() => setOpen(false)} />}
    </div>
  );
}


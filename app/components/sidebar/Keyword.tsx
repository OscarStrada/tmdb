import React from "react";

type Keyword = {
  id: number;
  name: string;
};

interface Props {
  title: string;
  keywords: Keyword[];
}

export const Keyword = ({ title, keywords }: Props) => {
  return (
    <div>
      <h3 className="font-semibold pb-4 capitalize">{title}</h3>
      <div className="flex gap-2 flex-wrap">
        {keywords.map((keyword) => (
          <div
            key={keyword.id}
            className="bg-slate-100 dark:bg-popover rounded-md text-sm px-3 py-1"
          >
            {keyword.name}
          </div>
        ))}
      </div>
    </div>
  );
};

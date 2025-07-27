import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Grip } from "lucide-react";
import React from "react";

interface SortableItemProps {
  id: string;
  isVisible?: boolean;
  isDragging?: boolean;
  children: React.ReactNode;
}

/**
 * A single item in a sortable list.
 *
 * @param {SortableItemProps} props The props for the sortable item.
 * @returns {React.ReactElement} A React element representing the sortable item.
 */
export function SortableItem({ id, children, isVisible, isDragging }: SortableItemProps): React.ReactElement {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  console.log(isDragging, "isDragging");
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="inline-flex items-center gap-2"
    >
      {!isVisible ? (
        <div {...listeners}>
          <Grip className="h-5 w-5 cursor-move text-gray-400 transition-all duration-500" />
        </div>
      ) : (
        <div className="opacity-0 transition-all duration-500">
          <Grip className="h-5 w-5 cursor-move text-gray-400" />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

import { Check } from "lucide-react";

interface ItemProps {
  text: string;
}
export default function Item(props: ItemProps) {
  return (
    <p className="flex justify-end text-right gap-8 text-2xl">
      {props.text}
      <span>
        <Check className="text-right text-green-700" />
      </span>
    </p>
  );
}

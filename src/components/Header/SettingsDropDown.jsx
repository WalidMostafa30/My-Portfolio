import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsDropDown = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full cursor-pointer"
        >
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent placement="bottom-start" className="w-48">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

export default SettingsDropDown;

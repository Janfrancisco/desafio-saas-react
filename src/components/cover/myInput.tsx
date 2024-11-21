import { forwardRef } from "react";

const MyInput = forwardRef<HTMLInputElement>(function MyInput(props, ref) {
  return (
    <label>
      <input ref={ref} />
    </label>
  );
});

export default MyInput;

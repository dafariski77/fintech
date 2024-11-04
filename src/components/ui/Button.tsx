import React from "react";
import { ButtonBase, ButtonProps } from "../root/ButtonBase";
import { Loader2 } from "lucide-react";

export function Button(props: ButtonProps) {
  return (
    <ButtonBase disabled={props.isLoading} {...props}>
      {props.isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </>
      ) : (
        props.children
      )}
    </ButtonBase>
  );
}
